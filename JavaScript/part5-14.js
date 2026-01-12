let post = new Post('a', 'b', 'c');

console.log(post);

function Post(title, bodu, author) {
    this.title = title;
    this.bodu = bodu;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}