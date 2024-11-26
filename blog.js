let posts = [];

const postsDOM = document.querySelector(".blogCards");

async function getPosts() {
  const url = "https://lenapsikolojimerkezi.com/wp-json/wp/v2/posts?per_page=100";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Post API hatası: ${response.status}`);
    }
    posts = await response.json();
    console.log(posts[0].yoast_head_json.og_image[0].url);
    console.log(posts);
  } catch (error) {
    console.error(error.message);
  }
}

async function displayPosts() {
  await getPosts();

  postsDOM.innerHTML = posts
    .map((post) => {
      return `
        <div class="blogCard">
          <div class="blogCardImgContent">
            <img src=${post.yoast_head_json.og_image ? post.yoast_head_json.og_image[0].url : post.yoast_head_json.twitter_image}  alt="evlilik-oncesi-cift-danismanligi" class="blogCardImg" />
            <div class="topicCardInfoContent">
              <h4 class="topicCardDate">Haziran 27, 2024</h4>
              <a href=${post.link} class="topicCardLink">
                <h3 class="topicCardTitle">${post.title.rendered}</h3>
                <p>${post.uagb_excerpt || ""}</p>
              </a>
            </div>
          </div>
        </div>
       
        `;
    })
    .join("");
}

displayPosts();
