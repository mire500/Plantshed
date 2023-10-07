import React, {useState} from "react"


function Header({basket,totalSpend}) {
    return(
          <div class="flex flex-col">
              <div className="bg-pink-500 flex w-full justify-between px-4" >
                <img class="logo" src="../images/plantshed.svg" />
                <div>
                    <p>{basket.length}</p>
                    <p>{totalSpend}</p>
                </div>
              </div> 
             
      </div>

    )
}

export default Header;