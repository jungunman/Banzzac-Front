import styled from "@emotion/styled";
import useSearchMember from "@hooks/search/useSearchMember";
import { useEffect, useState } from "react";
import PetImg from "@assets/images/pet.png";

declare global {
    interface Window {
        kakao: any;
    }
}
export default function KakaoMap(){
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();
  const [locations, setLocations] = useState({longitude : 0.0, latitude :0.0, rangeNorth: 0.0, rangeEast :0.0 ,rangeSouth : 0.0, rangeWest: 0.0})
  const {severData:datas}=useSearchMember(locations); 


  // 맵 화면 띄우기

    useEffect(() => {
      const container = document.getElementById(`map`); // 지도를 담을 영역의 DOM 레퍼런스
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심 좌표
        level: 3, // 지도의 레벨(확대, 축소 정도)
      };
  
      setMap(new window.kakao.maps.Map(container, options)); // 지도 생성 및 객체 리턴
      setMarker(new window.kakao.maps.Marker());

    }, []);

     // 맵 로드 후 현재 위치 정보 가져오기
     useEffect(()=>{
      if(map != null){
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(
            getCurrentLocationSuccess,
            ()=>alert("위치 정보를 가져오는데 실패했습니다."),
            {
              enableHighAccuracy: true,
              maximumAge: 30000,
              timeout: 27000,
            }
          )
        }
      }
    },[map])

    //현재 위치로 화면 이동 및 마커 찍기
    function getCurrentLocationSuccess(pos : GeolocationPosition){
      if(map !=null){
        let currentPos = new window.kakao.maps.LatLng(
          pos.coords.latitude,//위도
          pos.coords.longitude //경도
        )
        console.log("현재 위치 : ")
        console.log(currentPos)
        //지도 이동
        map.panTo(currentPos)
        const bounds = map.getBounds();
        console.log("위도 경도"+bounds.getNorthEast())


        const copy = {...locations};
        copy.latitude = currentPos.La;
        copy.longitude = currentPos.Ma;
        copy.rangeNorth = bounds.getNorthEast().La
        copy.rangeEast = bounds.getNorthEast().Ma
        copy.rangeSouth = bounds.getSouthWest().La
        copy.rangeWest = bounds.getSouthWest().Ma
        setLocations(copy);

        //기존 마커 삭제 후 다시 찍기
        marker.setMap(null);
        marker.setPosition(currentPos);
        marker.setMap(map);

      }
    }

    // //지도가 업로드 된 후, 서버에서 DATA 뽑아오기
    // useEffect(()=>{
    //   if(map !=null){
    //     axios.post("http://localhost/api/search",locations).then(({data})=>{
    //       console.log(data);
    //       setDatas(data);
    //     })
    //   }
    // },[locations])
    function clickwant(){
      console.log("누름")
    }

    useEffect(()=>{
      if(datas != null){
        
        datas.data.forEach(severData => {
          //커스텀 오버레이 모습 (
          let content = `<img stlye="position:absolute;z-index:5;" src=${PetImg} alt="" />`

          //커스텀 오버레이 위치
          var position = new window.kakao.maps.LatLng(severData.longitude, severData.latitude);  

          // 커스텀 오버레이를 생성합니다
          var customOverlay = new window.kakao.maps.CustomOverlay({
              position: position,
              content: content,
              xAnchor: 0.3,
              yAnchor: 0.91
          });

          window.kakao.maps.event.addListener(customOverlay, 'click', function() {
            clickwant();
            alert("누름!")
          });


          customOverlay.setMap(map);
        });



      }
    },[datas])

    return <Map id="map" style={{ width: "100%", height: "100%" }} />;
  }



const Map = styled.div`
    position: absolute;
    z-index: 0;
`