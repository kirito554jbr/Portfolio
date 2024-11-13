document.addEventListener('DOMContentLoaded', ()=>{
    //fetch the data as soon as the page has loaded
    let url = "data.xml";
    fetch(url)
    .then(response=>response.text())
    .then(data=>{
        // console.log(data);  //string
        let parser = new DOMParser(),
        xml = parser.parseFromString(data, "text/xml");
        document.getElementById('output').textContent = data;
        console.log(xml);
    });
})