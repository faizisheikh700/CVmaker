const arr =[""]

const resu = document.querySelector('.resumeForm')
resu.addEventListener('submit', function(e) {
    e.preventDefault()
    generateResume()
})

function generateResume() {

    // generation Counts
    for (let i = 0;  i < arr.length; i++) {
        const count = arr[i]
        console.log(count)
        
    }
    const name = document.querySelector('.name').value
    const email = document.querySelector('.email').value
    const phone = document.querySelector('.phone').value
    const object = document.querySelector('.object').value
    const contact = document.querySelector('.contact').value
    const status = document.querySelector('.status').value
    const DOB = document.querySelector('.DOB').value
    const address = document.querySelector('.address').value
    const religion = document.querySelector('.religion').value
    const CNIC = document.querySelector('.CNIC').value

    const matric = document.querySelector('.matric').value
    const inter = document.querySelector('.inter').value
    const graduate = document.querySelector('.graduate').value
    const another = document.querySelector('.another').value
    const experience = document.querySelector('.experience').value
    const skills = document.querySelector('.skills').value

    const resumeHTML = `
        <div class="mainDiv" style=" background-color: #fff">
        <div style=" ">
        <br>
        <h1 style="font-size: 3rem; color: red; text-align: center; text-decoration: underline; text-transform: uppercase;" class="firstName">${name}</h1>
        </div>
        <p style="text-align: center">Email: ${email} | Phone: ${phone}</p>
        <hr>
        <div style=" ">
        <div style=" ">
        <h3>Object</h3>
        <p>${object.replace(/\n/g, '<br>')}</p>
        <hr>
        <h3>About</h3>
        <p>Contact: ${contact.replace(/\n/g, '<br>')} </p>
        <p>Status: ${status.replace(/\n/g, '<br>')} </p>
        <p>Date Of Birth: ${DOB.replace(/\n/g, '<br>')} </p>
        <p>Address: ${address.replace(/\n/g, '<br>')} </p>
        <p>Religion: ${religion.replace(/\n/g, '<br>')} </p>
        <p>CNIC: ${CNIC.replace(/\n/g, '<br>')} </p>
        <hr>
        <h3>Education</h3>
        <h5>${matric.replace(/\n/g, '<br>')}</h5>
        <h5>${inter.replace(/\n/g, '<br>')}</h5>
        <h5>${graduate.replace(/\n/g, '<br>')}</h5>
        <h5>${another.replace(/\n/g, '<br>')}</h5>
        <hr>
        <h3>Work Experience</h3>
        <p>${experience.replace(/\n/g, '<br>')}</p>
        <hr>
        <h3>Skills</h3>
        <p style="width: 300px">${skills.replace(/\n/g, '<br>')}</p>
        </div>
        </div>
        </div>   
    `

    const resumeDiv = document.querySelector('.resume')
    resumeDiv.innerHTML = resumeHTML
    resumeDiv.style.display = 'block'

    const downloadBtn = document.createElement('button')
    downloadBtn.textContent = 'Download Resume'
    downloadBtn.onclick = downloadResume
    resumeDiv.appendChild(downloadBtn)
}



downloadResume = () => {
    const resumeElement = document.querySelector('.resume')
    

    html2pdf()
      .from(resumeElement)
      .save('resume.pdf')
  
}