const domain = window.location.hostname;

const metaConfig = {
  "polarluck.ca": {
    title: "POLARLUCK - PLAY NOW AND WIN A LOT OF MONEY !",
    description: "Polarluck is an online gambling platform in Canada that will give you the opportunity to experience the sensation of gambling with a high win rate.",
  },
  "polarluck.io": {
    title: "POLARLUCK - THIS IS YOUR MOMENT OF WINNING !",
    description: "Polarluck is your winning moment, where online gambling meets excitement with thrilling games, massive jackpots and non-stop entertainment, all in one place.",
  },
};

if (metaConfig[domain]) {
  document.title = metaConfig[domain].title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", metaConfig[domain].description);
  } else {
    const newMeta = document.createElement("meta");
    newMeta.name = "description";
    newMeta.content = metaConfig[domain].description;
    document.head.appendChild(newMeta);
  }
}