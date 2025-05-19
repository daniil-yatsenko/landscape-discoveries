const activeLink = (data) => {
  const navbar = document.querySelector(".navbar_navbar");
  const navLinks = navbar.querySelectorAll(".navbar_navlink");
  const namespace = data.next.namespace;

  if (!namespace) return;

  // first word of link's text content
  const namesToHref = {
    Home: ["/"],
    HomeV2: ["/home-v2"],
    About: ["/about"],
    Services: ["/services-processes"],
    Gallery: ["/gallery"],
    Plants: ["/plants"],
  };

  navLinks.forEach((navLink) => {
    const linkName = navLink.textContent.trim().split(" ")[0];
    const href = navLink.getAttribute("href");
    const pathname = window.location.pathname;

    navLink.classList.remove("w--current");
    console.log(linkName, href);

    if (namesToHref[linkName]?.includes(href) && href === pathname) {
      navLink.classList.add("w--current");
    }

    if (pathname === "/home-v2" && linkName === "Home") {
      navLink.classList.add("w--current");
    }
  });
};

export { activeLink };
