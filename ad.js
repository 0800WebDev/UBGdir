(function () {
  const items = [
    {
      img: "https://0800webdev.github.io/UBGdir/logo.png",
      link: "https://0800webdev.github.io/UBGdir/"
    },
    {
      img: "https://i.postimg.cc/V6zNPQXW/7ad210998816426cb8bd123081203109-free.png",
      link: "https://pgis.x10.mx/"
    },
    {
      img: "https://i.postimg.cc/5Ng9k1mx/28470cf859534f4da1071c04d2f2ee6b-free.png",
      link: "https://github.com/0800WebDev"
    },
    {
      img: "https://0800webdev.github.io/UBGdir/logos/ubg98.png",
      link: "https://www.ubg98.com"
    }
  ];

  function getDomain(url) {
    return new URL(url).hostname.replace("www.", "");
  }

  function showRandom() {
    const currentDomain = location.hostname.replace("www.", "");

    const allowed = items.some(item => getDomain(item.link) === currentDomain);
    if (!allowed) return;

    const validItems = items.filter(item => {
      return getDomain(item.link) !== currentDomain;
    });

    if (validItems.length === 0) return;

    const randomItem = validItems[Math.floor(Math.random() * validItems.length)];

    const container = document.createElement("div");

    const a = document.createElement("a");
    a.href = randomItem.link;

    const img = document.createElement("img");
    img.src = randomItem.img;
    img.style.maxWidth = "150px";
    img.style.cursor = "pointer";

    a.appendChild(img);
    container.appendChild(a);

    // try to insert where script is
    let scriptTag = document.currentScript;

    // fallback if null (external/defer/async)
    if (!scriptTag) {
      const scripts = document.getElementsByTagName("script");
      scriptTag = scripts[scripts.length - 1];
    }

    if (scriptTag && scriptTag.parentNode) {
      scriptTag.parentNode.insertBefore(container, scriptTag);
    } else {
      // last fallback → append to body
      document.body.appendChild(container);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showRandom);
  } else {
    showRandom();
  }
})();
