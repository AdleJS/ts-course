let language = {
  name: "JavaScript",
  officialName: "ECMAScript",
  released: 1995,
  creator: "Brendan Eich",
  company: "Netscape",
};

console.log(language);
console.log(language.officialName);
console.log(language.creator);

language["name"] = "TypeScript";
language["released"] = 2012;
language["creator"] = "Anders Hejlsberg";
language["company"] = "Microsoft";

console.log(language);
console.log(language.released);
console.log(language.company);
console.log(language.officialName);
