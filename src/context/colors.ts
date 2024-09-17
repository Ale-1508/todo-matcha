const getOpacity = ( h:number, s:number, l:number, opacity:number ) => {
  return `hsla(${h}, ${s}%, ${l}%, ${opacity})`
}

const colors = {
  background:"#7180AC",

  primary_100:"#eaecf1",
  primary_200:"#bfc7d4",
  primary_300: ( opacity:number = 1 ) => getOpacity(218, 19, 58, opacity), // #808fa9
  primary_400:"#556a8d",
  primary:"#2B4570",
  primary_600:"#22375a",
  primary_700:"#1a2943",
  primary_800:"#111c2d",
  primary_900:"#090e16",
  
  secondary:"#A8D0DB",
  accents:"#E49273",
  details:"#A37A74",
  
  lightBackground:"#f8f8f8",

  text: () => getOpacity(0, 0, 0.06, 1),
  test:"#2B6870",

  important: "#e51a39",
}

  

export default colors