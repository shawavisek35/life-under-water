import React from "react";

function Info(){
    return (
        <div className="container mx-auto bg-white mt-4">
            <div className="container mx-auto p-4 text-lg uppercase font-bold text-center">Information</div>
            
            <div className="p-5">
              <img src="https://miro.medium.com/max/1272/0*TFmFug4zhzfbKsd5.jpg" className="float-left w-1/2 h-1/2 rounded-full" alt="..." />
              <div className="relative">
                <div className="items-center mt-48 p-6">
                  <h1 className="text-6xl mb-5">Beach Protector</h1>
                  <p className="text-xl items-center">
                    Hello, We are Beach Protectors! based in Mandarmani we host cleanups
                    upto 6 times a month, our goal is to make the beach a safer place
                    and preserve aquatic life with the nature around it. Feel free to
                    join us and ask us questions
                  </p>
                </div>
              </div>
              </div>
        </div>
    )
}

export default Info;