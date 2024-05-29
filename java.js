//MenuLinks
const menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];
  
  //Retrieve and store main
  const mainEl = document.querySelector("main");
  
  //Change the main elements background color
  mainEl.style.background = "var(--main-bg)";
  
  //Inject an h1 with text into main
  mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
  
  //Add a class to main
  mainEl.classList.add("flex-ctr");
  
  //Retrieve and store the nav
  const topMenuEl = document.getElementById("top-menu");
  
  //Change the height of the nav
  topMenuEl.style.height = "100%";
  
  //Change the background color of the nav
  topMenuEl.style.background = "var(--top-menu-bg)";
  
  //Add a class to tnav
  topMenuEl.classList.add("flex-around");
  
  //Iterate through the menuLinks Array
  menuLinks.forEach((linkObj) => {
    //For each link object
    //console.log(linkObj);
    //Create an a element
    const aEl = document.createElement("a");
