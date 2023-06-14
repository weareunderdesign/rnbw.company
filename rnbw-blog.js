const rnbwBlog = `
<div
class="box align-center radius-s border padding-xl hidden-on-mobile"
style="min-height: 600px; position: relative"
>
<div style="position: absolute; left: 40px; top: 40px; right: 40px"
>
  <article style="opacity:0; transition: opacity 0.5s; transition-delay: 0.5s;" id="anim-5">
    <h2>Blog Post Title</h2>
    <p>Posted on April 30, 2023 by Author Name</p>
    <svg-icon
      src="./images/image.svg"
      alt="Blog Post Image"
      class="opacity-m"
    ></svg-icon>
    <p>
      This is the first paragraph of the blog post. It should be
      engaging and give readers an idea of what to expect in the rest
      of the article.
    </p>
    <h3>Subheading 1</h3>
    <p>
      This paragraph is part of the first section, which has a
      subheading to help organize the content.
    </p>
    <h3>Subheading 2</h3>
    <p>
      This paragraph is part of the second section, which also has a
      subheading for organization purposes.
    </p>
  </article>
</div>
<div
  class="row shadow background-primary radius-s box-s border"
  style="z-index: 999"
  id="anim-6"
>
  <div class="gap-m border-bottom padding-m justify-stretch box-l">
    <div class="gap-s column">
      <div class="justify-start gap-s padding-s">
        <div>
          <span class="text-l opacity-m" id="anim-1" data-type="create a blog post layout">
          Do something...
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="column align-stretch box-l padding-m">
    <div class="column align-stretch" id="anim-4">
      <div class="padding-m gap-s">
        <span class="text-s opacity-m">Generate</span>
      </div>
      <div
        class="justify-stretch padding-s background-secondary radius-xs"
      >
        <div class="gap-s align-center">
          <div class="padding-xs">
            <svg-icon
              src="https://raincons.rnbw.dev/icons/repeat-x.svg"
            ></svg-icon>
          </div>
          <span class="text-m">Continue</span>
        </div>
      </div>
      <div class="justify-stretch padding-s radius-xs">
        <div class="gap-s align-center">
          <div class="padding-xs">
            <svg-icon
              src="https://raincons.rnbw.dev/icons/bullet.svg"
            ></svg-icon>
          </div>
          <span class="text-m">Create</span>
        </div>
      </div>
      <div class="justify-stretch padding-s radius-xs">
        <div class="gap-s align-center">
          <div class="padding-xs">
            <svg-icon
              src="https://raincons.rnbw.dev/icons/help.svg"
            ></svg-icon>
          </div>
          <span class="text-m">Explain</span>
        </div>
      </div>
      <div class="justify-stretch padding-s radius-xs">
        <div class="gap-s align-center">
          <div class="padding-xs">
            <svg-icon
              src="https://raincons.rnbw.dev/icons/events.svg"
            ></svg-icon>
          </div>
          <span class="text-m">Brainstorm </span>
        </div>
      </div>
      <div class="padding-m gap-s">
        <span class="text-s opacity-m">Edit</span>
      </div>
      <div class="justify-stretch padding-s radius-xs">
        <div class="gap-s align-center">
          <div class="padding-xs">
            <svg-icon
              src="https://raincons.rnbw.dev/icons/bubble.svg"
            ></svg-icon>
          </div>
          <span class="text-m">Change tone</span>
        </div>
      </div>
      <div class="justify-stretch padding-s radius-xs">
        <div class="gap-s align-center">
          <div class="padding-xs">
            <svg-icon
              src="https://raincons.rnbw.dev/icons/edit.svg"
            ></svg-icon>
          </div>
          <span class="text-m">Improve Writing </span>
        </div>
      </div>
      <div class="justify-stretch padding-s radius-xs">
        <div class="gap-s align-center">
          <div class="padding-xs">
            <svg-icon
              src="https://raincons.rnbw.dev/icons/location.svg"
            ></svg-icon>
          </div>
          <span class="text-m">Simplify </span>
        </div>
      </div>
      <div class="padding-m gap-s" id="anim-2">
        <span class="text-s opacity-m" >Recent</span>
      </div>
      <div class="justify-stretch padding-s radius-xs" id="anim-3">
        <div class="gap-s align-center">
          <div class="padding-xs">
            <svg-icon
              src="https://raincons.rnbw.dev/icons/bullet-outlined.svg"
            ></svg-icon>
          </div>
          <span class="text-m">Create a blog post layout</span>
        </div>
      </div>
      <div class="justify-stretch padding-s radius-xs">
        <div class="gap-s align-center">
          <div class="padding-xs">
            <svg-icon
              src="https://raincons.rnbw.dev/icons/bullet-outlined.svg"
            ></svg-icon>
          </div>
          <span class="text-m"
            >Create a pricing section with the active components
            libraries</span
          >
        </div>
      </div>
    </div>
  </div>
  <div class="box-l row align-stretch"></div>
</div>
</div>
`;

class RnbwBlog extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = rnbwBlog;
  }
}

customElements.define("rnbw-blog", RnbwBlog);

document.addEventListener("DOMContentLoaded", function () {
  const rnbwBlogElement = document.querySelector("rnbw-blog");

  function getAnimationElements() {
    let anim1 = rnbwBlogElement.querySelectorAll("#anim-1")[0];
    let anim3 = rnbwBlogElement.querySelectorAll("#anim-3")[0];
    let anim4 = rnbwBlogElement.querySelectorAll("#anim-4")[0];
    let anim5 = rnbwBlogElement.querySelectorAll("#anim-5")[0];
    let anim6 = rnbwBlogElement.querySelectorAll("#anim-6")[0];
    return { anim1, anim3, anim4, anim5, anim6 };
  }
  const { anim1 } = getAnimationElements();
  let delay = 250;

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(animateOnIntersect, options);
  observer.observe(anim1);

  function animateOnIntersect(entries, observer) {
    //set opacity of all the anim5 children to 0
    //convert to array
    const { anim5 } = getAnimationElements();
    let anim5DivChildren = Array.from(anim5.children);
    anim5DivChildren.forEach((child) => {
      child.style.opacity = 0;
      //add transition
      child.style.transition = "opacity 0.5s ease-in-out";
    });

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          type();
        }, 1000);
        observer.unobserve(entry.target);
      }
    });
  }

  const span = document.querySelector("rnbw-blog #anim-1");

  //

  let i = 0;
  const text = span.dataset.type;
  function type() {
    console.log({ i, text });
    if (i < text.length) {
      if (i == 0) {
        span.textContent = "";
      }
      span.textContent += text.charAt(i);
      i++;
      setTimeout(type, 50); // adjust the delay time as needed
      delay += 50;
    }
    if (i == text.length) {
      filterAndSelectDiv();
    }
  }

  function filterAndSelectDiv() {
    const { anim3, anim4, anim5, anim6 } = getAnimationElements();
    let anim4DivChildren = anim4.children;
    for (let i = 0; i < anim4DivChildren.length; i++) {
      if (
        anim4DivChildren[i].id == "anim-2" ||
        anim4DivChildren[i].id == "anim-3"
      ) {
        continue;
      }
      if (i === anim4DivChildren.length - 1) {
        setTimeout(() => {
          anim3.classList.add("background-secondary");
          setTimeout(() => {
            anim5.style.opacity = "1";
            anim6.style.opacity = "0";
            let anim5DivChildren = Array.from(anim5.children);
            let timer = 250;
            anim5DivChildren.forEach((child) => {
              setTimeout(() => {
                child.style.opacity = 1;
              }, timer);
              timer += 250;
            });
            setTimeout(() => {
              rnbwBlogElement.innerHTML = rnbwBlog;
              delay = 250;
              i = 0;
              setTimeout(() => {
                const { anim1 } = getAnimationElements();
                observer.observe(anim1);
              }, 1000);
            }, 250 * anim5DivChildren.length + 1000);
          }, 250);
        }, delay);
      }
      setTimeout(() => {
        //add inline style to the children of display none
        anim4DivChildren[i].style.display = "none";
      }, delay);
      delay += 50;
    }
  }
});
