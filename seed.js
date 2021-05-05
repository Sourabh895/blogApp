const mongoose = require('mongoose');
const Blog = require('./models/blog');


const blogs = [
    {
        title: 'Help Scout',
        img: 'https://blog.hubspot.com/hs-fs/hubfs/Help_Scout_Blog-2.png?width=600&name=Help_Scout_Blog-2.png',
        author: 'Kane Williamson',
        desc: "What we particularly like about this blog is its use of featured images for all posts, including a banner one at the top that highlights a recent or particularly popular entry. These icons are set in front of bright, block colors that catch the readers' eye and signal what the post is about. And it works — everything about this blog's design says clean and readable."
    },
    {
        title: 'Microsoft Stories',
        img: 'https://blog.hubspot.com/hs-fs/hubfs/00-Blog_Thinkstock_Images/Microsoft_Stories_Blog.png?width=600&name=Microsoft_Stories_Blog.png',
        author: 'Sasuke',
        desc: 'Microsoft Stories is also a prime example of how a business blog can be a major asset for an overall rebrand. In recent years, Microsoft has worked to humanize its brand, largely in response to a rivalry with Apple. The "Stories" microsite has a simple tagline — "Get an inside look at the people, places and ideas that move us. It the softer side of Microsoft, so to speak.'
    },  
    {
        title: 'Pando',
        img: 'https://blog.hubspot.com/hs-fs/hubfs/Pando_Blog.png?width=600&name=Pando_Blog.png',
        author: 'Alden Cantrell',
        desc: 'Its interesting to see how color consistency can unify the more diversified elements of design. Pando, a blog that explores the startup cycle, incorporates bluetones in several sections of its site — the background, highlight bars, and certain areas of text. But it also uses several different fonts — all of which manage to look seamless together'
    },
    {
        title: 'Design Milk',
        img: 'https://blog.hubspot.com/hs-fs/hubfs/Screen_Shot_2016-09-30_at_10.42.15_AM.png?width=600&name=Screen_Shot_2016-09-30_at_10.42.15_AM.png',
        author: 'Thomas Crane',
        desc: 'Design Milk, an online contemporary design outlet, uses a very simple layout to highlight its posts. The sidebar to the right — which remains visiblewhen a blog post is opened to read — is perfect for showcasing thumbnail images for new articles. Thats an internal link strategy, which helps to encourage readers to remain on the site longer.'
    },
    {
        title: 'Mashable', 
        img: 'https://blog.hubspot.com/hs-fs/hubfs/Screen_Shot_2016-09-30_at_11.02.47_AM.png?width=600&name=Screen_Shot_2016-09-30_at_11.02.47_AM.png',
        author: 'Bradyn Kramer',
        desc: "Mashable breaks its content into three noticeable sections on the homepage: New posts are listed on the left in the smallest sized thumbnails. Rising posts are displayed in the center column as large thumbnails, and the  posts are shown to the right, also as large thumbnails. This three-pronged approach to displaying content can help readers decide which kind of news matters to them the most — the attention-grabbing top story, or other posts that are currently trending."
    },
     {
        title: 'Brit + CO',
        img: 'https://blog.hubspot.com/hs-fs/hubfs/Screen_Shot_2016-09-30_at_11.10.58_AM.png?width=600&name=Screen_Shot_2016-09-30_at_11.10.58_AM.png',
        author: 'Pierre Cox',
        desc: 'We dig the seasonality of the site, too. I mean, avocado jack-o-lanterns on the dawn of October? Adorable, and replete with a colorful, fun photo to illustrate the story content. The subtle trending header also serves as a nice way to promote popular content, without being too in-you-face about it. Plus, with such great visuals, we took note of the nod to Pinterest — that icon is important to include when your blog incorporates attractive imagery.'
    },
    {
        title: 'Tesco Living',
        img: 'https://blog.hubspot.com/hs-fs/hubfs/Screen_Shot_2016-09-30_at_11.16.35_AM.png?width=600&name=Screen_Shot_2016-09-30_at_11.16.35_AM.png',
        author: 'Cierra Vega',
        desc: 'What Tesco Living has achieved is a great balance of simplicity and boldness. The layout is extremely minimal, but it isn dull. Warm and welcoming shades underscore each content category, and the photos add dashes of colors throughout the site. Its a great example of how the right imagery can achieve an appealing "less-is-more" appearance, especially if that fits in with your overall brand concept.'
    }, 
    {
        title: '500px',
        img: 'https://blog.hubspot.com/hs-fs/hubfs/Screen_Shot_2016-09-30_at_11.38.40_AM.png?width=600&name=Screen_Shot_2016-09-30_at_11.38.40_AM.png',
        author: 'Alvaro Mcgee',
        desc: 'Much like Crew, the photography blog, 500px, leads with one featured article and a big, bold, high-definition photo to draw the reader in. That makes is pretty clear what the blog is about — it boasts valuable content on photography with gripping photography.'
    }
]





const seedDB = async () => {
    await Blog.insertMany(blogs);
    console.log("DB Seeded");
}


module.exports = seedDB;














