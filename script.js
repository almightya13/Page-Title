var product=[];
var prices=[];
var picture=[];
$(".name").click(function() {
    var productBuy = $(".buy").val();
    var priceNum = $(".number").val();
    var picturePic = $(".picture").val();
    product.push(productBuy);
    price.push(priceNum);
    picture.push(picturePic);
    $(".sport").append("<div class='sport'><img src="+productBuy+"><p>"+priceNum+"</p><p>$"+picturePic+"</p></div");
    prices.forEach(function()
});
