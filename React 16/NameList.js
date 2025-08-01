import React from 'react';
//import Legend from './Legend'; // 👈 Importing the child component

function NameList() {
const names =['F.Kafka','Jane Austen','Sylvia Path','Osamu Dazai','F.Dostoevsky','F.Kafka'];
//const legend = [
 //   { fullName: 'F. Kafka', birth: 1883, death: 1924 },
 //{ fullName: 'Jane Austen', birth: 1775, death: 1817 },
  //  { fullName: 'Sylvia Plath', birth: 1932, death: 1963 },
   // { fullName: 'Osamu Dazai', birth: 1909, death: 1948 },
   // { fullName: 'F. Dostoevsky', birth: 1821, death: 1881 }
  //];

  //const legendList = legend.map(legend => <Legend key = {legend.fullName} legend = {legend} />);
  const nameList = names.map((names,index) => <h1 key ={index}>{index}{names}</h1>);
  return <div>{nameList}</div>;//index as key
}

export default NameList;

