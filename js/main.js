// massiv = []
// savatcha = []

// $(".katalog").on("click", ()=>{
//     $.ajax("http://myjson.dit.upm.es/api/bins/4zr5",{
//         success: function (response){
//             massiv = response
//             katalog()
//         }
//     })
// })

// function katalog(){
//     $(".row1").html("")
//     $(".row2").html("")
//     let sanoq = 0
//     massiv.forEach(mahsulot =>{
//         let card = `
        // <div class="col-lg-3 col-md-6 col-sm-12">
        //        <div class="foods">
        //        <img class="img"src="${mahsulot.photo}" alt="">
        //        <h4>${mahsulot.nomi}</h4>
        //        <button class="price">${mahsulot.narx} so'm</button>
        //        </div>
        // </div>
        
//         `
//         $(".row1").append(card)
//         sanoq++
//     })
// }
// function add(index){
//     let sanoq = 0
//     let savatcha_index = 0
//     for(let i = 0; i<savatcha.length; i++){
//       if(savatcha[i].nomi == massiv[index].nomi){
//         sanoq++
//         savatcha_index = i
//       }
//     }
  
//     if(sanoq == 1){
//       savatcha[savatcha_index].miqdor = savatcha[savatcha_index].miqdor + 1
//     }
//     else if(sanoq == 0){
//       savatcha_massiv.push({
//         nomi: massiv[index].nomi,
//         narx: massiv[index].narx,
//         photo: massiv[index].photo,
//         miqdor: 1
//       })
//     }
// }
// $(".savatcha").on("click", ()=>{
//     $(".row2").html("")
//     $(".row1").html("")
//     let yigindi = 0
//   savatcha.forEach(nimadir => {
//     yigindi += nimadir.narx * nimadir.miqdor
//   })
//   let jami = `
//     <div>
//       <h2 class="text-primary my-3 text-center fw-bold">Jami: ${yigindi}</h2>
//     </div>
//   `
//   $(".row2").append(jami)
//     savatcha.forEach(mahsulot =>{
//         let card = `
//         <div class="card my-4 card_savatcha shadow py-3">
//         <div class="d-flex align-items-center">
//         <div class="d-flex justify-content-center">
//         <img class="savatcha_img w-100" src="${olingan.photo}">
//         </div>
//         <div class="card-body d-flex flex-column">
//           <h2>${olingan.nomi}</h2>
//           <p class="fs-5 text-danger fw-bold">Narxi ${olingan.narx}</p>
//           <p class="fs-4 text-primary fw-bold">Miqdori ${olingan.miqdor} </p>
//         </div>
//         <p class="fs-3 text-warning fw-bold">Umumiy narxi ${olingan.narx * olingan.miqdor}</p>
//         </div>
//       </div>
//         `
//         $(".row2").append(card)

//     })
    

// })


let katalog_massiv = []
let savatcha_massiv = []


$(".but_katalog").on("click", () => {
  $(".row1").html("")
  $(".row2").html("")
  $.ajax("http://myjson.dit.upm.es/api/bins/5f6p", {
    success: function (baza) {
      katalog_massiv = baza
      bittada()
    },
    error: function (error) {
      alert("xato bor")
    }
  });
});


function bittada() {
  $(".row1").html("")
  $(".row2").html("")
  let index = 0
  katalog_massiv.forEach(mahsulot => {
    let card = `
    <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="foods">
            <img class="img"src="${mahsulot.photo}" alt="">
            <h4>${mahsulot.name}</h4>
            <button class="price"  onclick=qoshish(${index})>${mahsulot.narx} so'm</button>
        </div>
    </div>
    `
    $(".row1").append(card)
    index++
  })
}
function qoshish(index){
  let sanoq = 0
  let savatcha_index = 0
  for(let i = 0; i<savatcha_massiv.length; i++){
    if(savatcha_massiv[i].name == katalog_massiv[index].name){
      sanoq++
      savatcha_index = i
    }
  }

  if(sanoq == 1){
    savatcha_massiv[savatcha_index].miqdor = savatcha_massiv[savatcha_index].miqdor + 1
  }
  else if(sanoq == 0){
    savatcha_massiv.push({
      name: katalog_massiv[index].name,
      narx: katalog_massiv[index].narx,
      photo: katalog_massiv[index].photo,
      miqdor: 1
    })
  }
}


$(".but_savatcha").on("click", () => {
  $(".row2").html("")
  $(".row1").html("")
  let yigindi = 0
  savatcha_massiv.forEach(nimadir => {
    yigindi += nimadir.narx * nimadir.miqdor
  })
  let jami = `
    <div>
      <h2 class=" my-3 text-center fw-bold all">Jami: ${yigindi}</h2>
    </div>
  `
  $(".row2").append(jami)
  savatcha_massiv.forEach(olingan => {
    let card1 = `
      <div class="col-12 JamiCard">
        <div class="d-flex align-items-center">
        <div class="d-flex justify-content-center">
        <img class="savatcha_img w-100" src="${olingan.photo}">
        </div>
        <div class="card-body d-flex flex-column">
          <h2 class="name">${olingan.name}</h2>
          <p class="fs-5 text-danger fw-bold">Narxi: ${olingan.narx}</p>
          <p class="fs-4  fw-bold amount">Miqdori: ${olingan.miqdor} </p>
        </div>
        <p class="fs-3 text-danger fw-bold">Umumiy narxi: ${olingan.narx * olingan.miqdor}</p>
        </div>
      </div>
    `
    $(".row2").append(card1)
  })
  let forButton = `
  <div class="ForButton">
  <button class="tugmaEnd">Buyurtma Berish</button>
  </div>
  `
  $(".row2").append(forButton)
  
$(".tugmaEnd").on("click", ()=>{
   alert("Buyurtmangiz qabul qilindi!")
})
})