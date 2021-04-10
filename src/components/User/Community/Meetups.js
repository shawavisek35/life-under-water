import React, {useState, useEffect} from "react";
import fire from "../../../config/Fire";

const Meetups = () => {
    const [meets, setMeets] = useState([]);

    useEffect(() => {
        getMeets();
    })

    const getMeets = async () => {
        const Doc = await fire.firestore().collection("communities").doc("Beach Protector").get();
        const data = Doc.data();
        setMeets(data?.meetups);
    }
    
    return (
        <div className="container mx-auto">
            <div className="container mx-auto p-4 text-lg uppercase font-bold text-center">Meet Ups</div>
            {
                meets &&
                meets.map((meet, key) => (
                    <div key={key} className="container rounded bg-white shadow max-w-md m-4 p-4">
                        <div className="p-2">
                            <img src="https://miro.medium.com/max/1272/0*TFmFug4zhzfbKsd5.jpg" className="float-left w-10 h-10 mr-3 rounded-full" alt="..." />
                            <p className="uppercase">{meet.type}</p>
                            <p className="text-sm text-gray-600 ">{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(meet.date)}</p>
                        </div>
                        <section className="uppercase font-bold px-5">
                            <span
                            className="text-xs font-semibold inline-block py-2 px-3 uppercase rounded-full text-black-600 bg-blue-200 uppercase last:mr-0 mr-1 mb-3"
                            >
                            {meet.status}
                            </span>
                            <a href={meet.link}
                            className="text-xs font-semibold inline-block py-2 px-3 uppercase rounded-full text-black-600 bg-blue-200 uppercase last:mr-0 mr-1 mb-3"
                            >
                            Join
                            </a>
                        </section>
                        
                    </div>
                ))
            }
        </div>
        
    )
}

export default Meetups;