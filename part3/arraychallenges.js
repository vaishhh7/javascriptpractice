let teaFlavors= ["grean tea", "black tea", "oolong tea"]
let fisrtTea= teaFlavors[0];
console.log(fisrtTea)

let cities =["london", "tokyo", "paris", "new york"]
let favoriteCity= cities[2]
console.log(favoriteCity)


let teaTypes= ["herbal tea", "white tea", "masala chai"]
teaTypes[1]= "jasmine tea"
console.log(teaTypes)


// add elemts to an array
let citiesVisited =["mumbai", "sydney"]
citiesVisited.push("Berlin")
console.log(citiesVisited)


let teaOrder=["chai", "iced tea","matcha", "earl grey"]
const lostOrder =teaOrder.pop()
console.log(lostOrder)

let popularTeas=["grean tea", "oolong tea","chai"]
let softCopyTeas= popularTeas
console.log(softCopyTeas)

// soft copy of an array any change to og array leads to soft copy array also changing


let topCities=["berlin", "singapore", "new york"]
let hardCopyCities= [...topCities] // this is a way to make hard copy

topCities.pop()
console.log(hardCopyCities)
console.log(topCities)


let europe=["paris","rome"]
let asian= ["tokyo","delhi"]
let world = europe+asian
console.log(typeof (world))
let world1= [europe,asian]
console.log(world1)
let world2= europe.concat(asian)
console.log(world2)
console.log(typeof world2)

let cityBucketList =["kyoto", "london", "capetwoen","vancouver"]
let isLondonInList=cityBucketList.includes("london")
if (isLondonInList){
    console.log(isLondonInList)
} else {
    console.log(false)
}

// in java script the upper and lower case matters a lot
