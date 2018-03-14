var coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor( Math.random()*2 );
    },
    toString: function() {
        if (this.state === 0) { return "H" };
        if (this.state === 1) { return "T" };
    },
    toHTML: function() {
        var img = document.createElement("img");
        if (this.state === 0) { img.src = "heads.jpg" };
        if (this.state === 1) { img.src = "tails.jpg" };
        return img;
    }
};

const txtArray = [];
for (let i = 0; i < 20; i++) {
    coin.flip();
    txtArray.push(coin.toString());
    document.getElementById("images").appendChild(coin.toHTML());
}
document.getElementById("text").innerHTML = txtArray.join(", ");