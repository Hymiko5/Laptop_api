const url = 
    {
        name: 'thegioididong',
        address: 'https://www.thegioididong.com/'
    }
const axios = require('axios');
const cheerio = require('cheerio');
class LaptopController{
    getAllType(req, res, next){
        const laptops = [];
        // [GET] /laptop-ldp
    const laptopTypes = ["gaming", "macbook", "hoc-tap-van-phong", "do-hoa-ky-thuat", "mong-nhe", "cao-cap-sang-trong"];
    axios.get(url.address + 'laptop-ldp')
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        
        laptopTypes.forEach(laptopType => {
            $(`#${laptopType} .item`, html).each(function () {
                const laptopName = $(this).find('.main-contain').attr('data-name');
                const brand = $(this).find('.main-contain').attr('data-brand');
                const installment = $(this).find('.lb-tragop').text();
                const image = $(this).find('.lazyload').attr('data-src');
                const icon = $(this).find('.lbliconimg').attr('src');
                const ram = $(this).find('.item-compare span:nth-child(1)').text();
                const SSD = $(this).find('.item-compare span:nth-child(2)').text();
                const price_old = $(this).find('.box-p .price-old').text().replace(/₫$/, '');
                const price = $(this).find('.price').text().replace(/₫$/, '');
                const gift = $(this).find('.item-gift b').text().replace(/₫$/, '');
                const unility = new Object();
                unility.monitor = $(this).find('.utility p:nth-child(1) span:nth-child(2)').text();
                unility.CPU = $(this).find('.utility p:nth-child(2) span:nth-child(2)').text();
                unility.card = $(this).find('.utility p:nth-child(3) span:nth-child(2)').text();
                unility.Pin = $(this).find('.utility p:nth-child(4) span:nth-child(2)').text();
                if(laptopName){
                    laptops.push({
                        laptopName, brand, installment, image, icon, ram, SSD, price_old, price, gift, unility, laptopType: laptopType.replace(/-/g,' ')
                    });
                }
                
                
        });
        })
        
    req.laptops = laptops;
    next();
    }).catch(err => console.log(err));
   
    }
    getType(req, res, next) {
            const { g } = req.query;
            let address;
            address = url.address + 'laptop?g=' + g;
            const laptops = [];
            axios.post(address)
            .then(response => {
                const html = response.data;
                const $ = cheerio.load(html);
                $(`.item`, html).each(function () {
                    const laptopName = $(this).find('.main-contain').attr('data-name');
                    const brand = $(this).find('.main-contain').attr('data-brand');
                    const installment = $(this).find('.lb-tragop').text();
                    const image = $(this).find('.lazyload').attr('data-src');
                    const icon = $(this).find('.lbliconimg').attr('src');
                    const ram = $(this).find('.item-compare span:nth-child(1)').text();
                    const SSD = $(this).find('.item-compare span:nth-child(2)').text();
                    const price_old = $(this).find('.box-p .price-old').text().replace(/₫$/, '');
                    const price = $(this).find('.price').text().replace(/₫$/, '');
                    const gift = $(this).find('.item-gift b').text().replace(/₫$/, '');
                    const unility = new Object();
                    unility.monitor = $(this).find('.utility p:nth-child(1) span:nth-child(2)').text();
                    unility.CPU = $(this).find('.utility p:nth-child(2) span:nth-child(2)').text();
                    unility.card = $(this).find('.utility p:nth-child(3) span:nth-child(2)').text();
                    unility.Pin = $(this).find('.utility p:nth-child(4) span:nth-child(2)').text();
                    if(laptopName){
                        laptops.push({
                            laptopName, brand, installment, image, icon, ram, SSD, price_old, price, gift, unility, laptopType: g.replace(/-/g, ' ')
                        });
                    }
                    
                    
            });
                
            req.laptops = laptops;
            next();
            }).catch(err => console.log(err));
    }
    getMacbook(req, res, next) {
            const laptops = [];
            axios.get(url.address + 'laptop-apple-macbook')
            .then(response => {
                const html = response.data;
                const $ = cheerio.load(html);
                $(`.item`, html).each(function () {
                    const urlMacbook = $(this).find('a:nth-child(1)').attr('href');
                    const laptopName = $(this).find('.main-contain').attr('data-name');
                    const brand = $(this).find('.main-contain').attr('data-brand');
                    const installment = $(this).find('.lb-tragop').text();
                    const image = $(this).find('.lazyload').attr('data-src');
                    const icon = $(this).find('.lbliconimg').attr('src');
                    const ram = $(this).find('.item-compare span:nth-child(1)').text();
                    const SSD = $(this).find('.item-compare span:nth-child(2)').text();
                    const price_old = $(this).find('.box-p .price-old').text().replace(/₫$/, '');
                    const price = $(this).find('.price').text().replace(/₫$/, '');
                    const gift = $(this).find('.item-gift b').text();
                    const unility = new Object();
                    unility.monitor = $(this).find('.utility p:nth-child(1) span:nth-child(2)').text();
                    unility.monitor = $(this).find('.utility p:nth-child(2) span:nth-child(2)').text();
                    unility.card = $(this).find('.utility p:nth-child(3) span:nth-child(2)').text();
                    unility.Pin = $(this).find('.utility p:nth-child(4) span:nth-child(2)').text();
                    if(laptopName){
                        laptops.push({
                            urlMacbook,laptopName, brand, installment, image, icon, ram, SSD, price_old, price, gift, unility, laptopType: "macbook"
                        });
                    }
                    
                    
            });
                
            req.laptops = laptops;
            next();
            }).catch(err => console.log(err));
    }
    getLaptopDetail(req, res, next){
        const { laptop } = req.params;
        let address;
        let laptops;
        if(req.query.src == "osp"){
            address = `${url.address}laptop/${laptop}?src=osp`;
        }
        else {
            next();
        }
        axios.get(address)
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);
            $(`.detail`, html).each(function () {
                const laptopName = $(this).find('h1').text();
                const thumnail = [];
                $(this).find(".box_left .slider-item").each(function() {
                    if($(this).attr('data-time')){
                        if($(this).find('img').attr('src')){
                            thumnail.push($(this).find('img').attr('src'));
                        }
                        else {
                            thumnail.push($(this).find('img').attr('data-src'));
                        }
                        
                    }
                    
                });
                const policy = new Object();
                $(this).find('.policy .policy__list li').each(function() {

                    if($(this).find('.iconl:contains(".icondetail-sachhd")')){
                        policy.guide = ($(this).find('p').text().replace(/Bộ sản phẩm gồm\: | Xem hình/g, ''));
                    }
                })
                const price = $(this).find('.price-one .box-price .box-price-present').text().replace(/₫\s\*|₫\s/, '');
                const installment = $(this).find('.price-one .box-price span').text();
                const onlinePrice = $(this).find('.giamsoc-ol__bottom p').text().replace(/₫\s\*|₫\s/, '');
                const gift = new Object();
                gift.items = [];
                $(this).find('.gift .item a').each(function() {
                    gift.items.push({ title: $(this).attr('title'),img: $(this).find('figure img').attr('src')  });
                })
                const amount = $(this).find('.pr-txtb').text().match(/\d+/g);
                if(amount){
                    gift.amount = amount.join('.');
                }
                const expire = $(this).find('.pr-txt').text().match(/\d{1,2}\/\d{2}/g)
                if(expire) {
                    gift.expire = expire[0];
                }
                const configuration = new Object();
                $(this).find('.parameter .active li').each(function() {
                    const array = [];
                    const properties = $(this).find('.liright span');
                    for(const p of properties){
                        array.push($(p).text());
                    }
                    configuration[$(this).find('.lileft').text().replace(/:$/, '')] = array.join(', ');
                })

                const oldProduct = new Object();
                oldProduct.url = 'https://www.thegioididong.com/'+ $(this).find('.box_oldproduct a').attr('href');
                // oldProduct.laptopName = $(this).find('.box_oldproduct a').text();
                oldProduct.price = $(this).find('.box_oldproduct a b').text().replace(/₫$/, '');
                oldProduct.save = $(this).find('.box_oldproduct a i').text();
                const laptopDetail = new Object();
                laptopDetail.promotion = [];
                laptopDetail.detail = [];
                $(this).find('.content-t-wrap h3').each(function() {
                    if($(this).text() != "Thông tin sản phẩm"){
                        laptopDetail.promotion.push($(this).text());
                    }
                    
                })
                $(this).find('.content-t-wrap p').each(function() {
                    if($(this).text() == ""){
                        laptopDetail.detail.push({ img: $(this).find('a img').attr("data-src") });
                    }
                    else{
                        laptopDetail.detail.push($(this).text());
                    }
                    
                });
                const rate = new Object();
                const rateNumber = $(this).find('.rating-top .rating-total').text().replace(/ ₫ánh giá$/,"");
                const stars = $(this).find('.rating-top .point').text();
                if(rateNumber != ""){
                    rate.rateNumber = rateNumber;
                }
                else {
                    rate.rateNumber = 0;
                }
                if(rateNumber != ""){
                    rate.stars = stars;
                }
                else {
                    rate.stars = 0;
                }
                const plugin = [];
                $(this).find('.main-contain').each(async function() {
                    const p = new Object();
                    p.image = $(this).find('.thumb, lazyload').attr('data-src');
                    p.name = $(this).find('h3').text().trim();
                    if($(this).find('.item-txt-online').text()){
                        p.onlyOnline = true;
                    }
                    else {
                        p.onlyOnline = false;
                    }
                    
                    p.oldPrice = $(this).find('.price-old').text().replace(/₫$/, '');
                    p.onlinePrice = $(this).find('.price').text().replace(/₫$/, '');
                    p.stars = $(this).find('.item-rating p .icon-star').length + $(this).find('.item-rating p .icon-star-haft').length * 0.5;
                    let rateNumber = $(this).find('.item-rating .item-rating-total').text();
                    if(rateNumber != ""){
                        p.rateNumber = $(this).find('.item-rating .item-rating-total').text();
                    }
                    else{
                        p.rateNumber = 0;
                    }
                    await plugin.push(p);
                })
                const relateProducts = [];
                $(this).find('.related .item .box-product').each(function() {

                    relateProducts.push($(this).find('.box-product h3').attr('title'));
                    
                })
                if(laptopName){
                    laptops = {
                        laptopName, thumnail, policy, price, installment, configuration, onlinePrice, gift, oldProduct, laptopDetail, rate, plugin, relateProducts
                    };
                }
                
                
        });
            
        req.laptops = laptops;
        next();
        }).catch(err => console.log(err));
    }
}

module.exports = new LaptopController();
