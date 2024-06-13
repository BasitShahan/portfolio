import React from 'react'

export default function Button() {
  return (
     <>     
     
        <div className="grid grid-cols-2 w-96">
          <div>
            <button className="bannerIcon w-10/12">Hire Me</button>
          </div>

          <div>
            <a href="/Abdul-Basit.pdf" download className="bannerIcon w-10/12">
              Download Cv
            </a>
          </div>
        </div>
        </>
 
    
  )
}
