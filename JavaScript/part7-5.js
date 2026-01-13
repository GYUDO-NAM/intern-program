const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTagus() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();
