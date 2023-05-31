import React, {useEffect} from "react";

const Map = ({branch})=>{
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId");
        const lat=branch.ENLEM;
        const lon=branch.BOYLAM;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
    });
    return(
         <div id="map-container" style={{paddingTop:"10px"}}>
            <iframe id="iframeId" title="map" height="350px" width="100%"></iframe>
        </div>     
    );
}
export default Map;