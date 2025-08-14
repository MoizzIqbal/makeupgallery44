import React from "react";
import text from "../assets/images/photos/page-header-text1.webp";
import blog1 from "../assets/images/blog/1.webp";
import blog2 from "../assets/images/blog/2.webp";
import blog3 from "../assets/images/blog/3.webp";
function Blogs() {
  return (
    <>
      <main class="main-content">
        <nav aria-label="breadcrumb" class="breadcrumb-style1 mb-10">
          <div class="container">
            <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Blog
              </li>
            </ol>
          </div>
        </nav>

        <section
          class="page-header-area page-header-style2-area"
          data-bg-img="assets/images/photos/page-header1.webp"
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-7">
                <div class="page-header-content page-header-st2-content">
                  <div class="title-img">
                    <img src={text} alt="Image" />
                  </div>
                  <h2 class="page-header-title">Whats the beauty secrets?</h2>
                  <p class="page-header-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-space pt-0">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="section-title text-center">
                  <h2 class="title">Blogs</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis
                  </p>
                </div>
              </div>
            </div>
            <div class="row mb-n9">
              <div class="col-sm-6 col-lg-4 mb-8">
                <div class="post-item">
                  <a href="blog-details.html" class="thumb">
                    <img
                      src={blog1}
                      width="370"
                      height="320"
                      alt="Image-HasTech"
                    />
                  </a>
                  <div class="content">
                    <a class="post-category" href="blog.html">
                      beauty
                    </a>
                    <h4 class="title">
                      <a href="blog-details.html">
                        Lorem ipsum dolor sit amet consectetur adipiscing.
                      </a>
                    </h4>
                    <ul class="meta">
                      <li class="author-info">
                        <span>By:</span> <a href="blog.html">Tomas De Momen</a>
                      </li>
                      <li class="post-date">February 13, 2022</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 mb-8">
                <div class="post-item">
                  <a href="blog-details.html" class="thumb">
                    <img
                      src={blog2}
                      width="370"
                      height="320"
                      alt="Image-HasTech"
                    />
                  </a>
                  <div class="content">
                    <a
                      class="post-category post-category-two"
                      data-bg-color="#A49CFF"
                      href="blog.html"
                    >
                      beauty
                    </a>
                    <h4 class="title">
                      <a href="blog-details.html">
                        Lorem ipsum dolor sit amet consectetur adipiscing.
                      </a>
                    </h4>
                    <ul class="meta">
                      <li class="author-info">
                        <span>By:</span> <a href="blog.html">Tomas De Momen</a>
                      </li>
                      <li class="post-date">February 13, 2022</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 mb-8">
                <div class="post-item">
                  <a href="blog-details.html" class="thumb">
                    <img
                      src={blog3}
                      width="370"
                      height="320"
                      alt="Image-HasTech"
                    />
                  </a>
                  <div class="content">
                    <a
                      class="post-category post-category-three"
                      data-bg-color="#9CDBFF"
                      href="blog.html"
                    >
                      beauty
                    </a>
                    <h4 class="title">
                      <a href="blog-details.html">
                        Lorem ipsum dolor sit amet consectetur adipiscing.
                      </a>
                    </h4>
                    <ul class="meta">
                      <li class="author-info">
                        <span>By:</span> <a href="blog.html">Tomas De Momen</a>
                      </li>
                      <li class="post-date">February 13, 2022</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-space pt-0">
          <div class="container">
            <div class="row mb-n9">
              <div class="col-sm-6 col-lg-4 mb-8">
                <div class="post-item">
                  <a href="blog-details.html" class="thumb">
                    <img
                      src={blog1}
                      width="370"
                      height="320"
                      alt="Image-HasTech"
                    />
                  </a>
                  <div class="content">
                    <a class="post-category" href="blog.html">
                      beauty
                    </a>
                    <h4 class="title">
                      <a href="blog-details.html">
                        Lorem ipsum dolor sit amet consectetur adipiscing.
                      </a>
                    </h4>
                    <ul class="meta">
                      <li class="author-info">
                        <span>By:</span> <a href="blog.html">Tomas De Momen</a>
                      </li>
                      <li class="post-date">February 13, 2022</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 mb-8">
                <div class="post-item">
                  <a href="blog-details.html" class="thumb">
                    <img
                      src={blog2}
                      width="370"
                      height="320"
                      alt="Image-HasTech"
                    />
                  </a>
                  <div class="content">
                    <a
                      class="post-category post-category-two"
                      data-bg-color="#A49CFF"
                      href="blog.html"
                    >
                      beauty
                    </a>
                    <h4 class="title">
                      <a href="blog-details.html">
                        Lorem ipsum dolor sit amet consectetur adipiscing.
                      </a>
                    </h4>
                    <ul class="meta">
                      <li class="author-info">
                        <span>By:</span> <a href="blog.html">Tomas De Momen</a>
                      </li>
                      <li class="post-date">February 13, 2022</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 mb-8">
                <div class="post-item">
                  <a href="blog-details.html" class="thumb">
                    <img
                      src={blog3}
                      width="370"
                      height="320"
                      alt="Image-HasTech"
                    />
                  </a>
                  <div class="content">
                    <a
                      class="post-category post-category-three"
                      data-bg-color="#9CDBFF"
                      href="blog.html"
                    >
                      beauty
                    </a>
                    <h4 class="title">
                      <a href="blog-details.html">
                        Lorem ipsum dolor sit amet consectetur adipiscing.
                      </a>
                    </h4>
                    <ul class="meta">
                      <li class="author-info">
                        <span>By:</span> <a href="blog.html">Tomas De Momen</a>
                      </li>
                      <li class="post-date">February 13, 2022</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Blogs;
