# raised-m

let sessionkey = null;
fetch("https://api.raisedforyou.com/api/v1/sessions")

.then( result => result.json())
.then( data => {
sessionkey = data[1].session_key;
console.log(data)
fetch("https://api.raisedforyou.com/api/v1/sessions/"+sessionkey )

.then( result => result.json())
.then( data => {
console.log(data)

})
})




to get amount

let money = null;
   fetch('https://api.raisedforyou.com/api/v1/sessions/726F37/donations',{
   method: 'GET',
   headers: {
   'Content-Type': 'application/json'
   },
 }).then(res => {return res.json()
 })
 .then( data => {
 sessionkey = data.amount;
 console.log(data)
