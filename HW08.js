function openiframe(index) {
    const c = document.getElementById('show-classdemo');
    console.log(c); 
    switch (index) {
        case 1:
            c.innerHTML = '<iframe src="animals.html" frameborder="1"></iframe>';
            break;
        case 2:
            c.innerHTML = '<iframe src="card.html" frameborder="1"></iframe>';
            break;
        case 3:
            c.innerHTML = '<iframe src="blog.html" frameborder="1"></iframe>';
            break;
    }
    console.log(index);
}