import React,{useState} from 'react';
import {Box,Text,Select,TextInput,Button,Anchor} from 'grommet';
const teach=["sam","gim","jim"];
const studnt=["Student","gim","jim","sam"];
const cors=["Course","gim","jim","sam"]
function Step2(props) {
    const [teacher,setteacher]=useState(teach[0]);
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [student,setstudent]=useState(studnt[0]);
    const [course,setcourse]= useState(cors[0]);
    const [stud,setstud]=useState(studnt[2]);
    const [stp1,setstp1] =useState(true);
    const[stp2,setstp2]= useState(false);
    const [title,settitle]=useState("");
    const[datetime,setdt]=useState();
    console.log(teacher,student,course,title,datetime);
    if(stp1){
        return(
            <form className="f">
        <label className="la1">Title</label><br />
        <input className="i1" placeholder="Title" type="text" value={title} onChange={(event)=> settitle(event.target.value)} />
       
        <br /><br /><br />

        <label className="la2">Date and Time</label><br />
        <input type="datetime-local" className="i2" value={datetime} onChange={(event)=> setdt(event.target.value)} />

        <br /><br /><br />
        <button className="b1">Cancel</button>
        <button className="b2" onClick={()=> { setstp1(false); setstp2(true);}} >Next</button>
      </form>
      

        )
    }
    if(stp2){
    return (
        <>
              <Box width="50%" height="auto" background="white"  className="stp2" direction="column" pad="medium" gap="small" >
                <Text color="#666" weight="bold" size="small" >Add Teachers</Text>
                <Select value={teacher} options={teach} closeOnChange={false} multiple onChange={({value:nextvalue})=> setteacher(nextvalue)} />
                <Text color="#666" size="small" weight="bold" >Add Students</Text>
                <Select options={studnt}  value={student} closeOnChange={false} multiple onChange={({value:nextvalue})=> setstudent(nextvalue)} />
                <Text color="#666" size="small" weight="bold" >Add Students</Text>
                <Box direction="row" gap="small" align="center">
                    <TextInput placeholder="Name" value={name} onChange={(event)=> setname(event.target.value)} />
                    <TextInput type="email" placeholder="Email" value={email} onChange={(event)=> setemail(event.target.value)} />
                    <Button primary label={<Text color="white">ADD</Text>} color="#FF6F00" />
                </Box>
                <Text  color="#666" size="small" weight="bold" >Add Students</Text>
                <Box direction="row" gap="small" align="center">
                    <Select options={cors}  value={course} closeOnChange={false} multiple onChange={({value:nextvalue})=> setcourse(nextvalue)}/>
                    <Select options={studnt}  value={stud} closeOnChange={false} multiple onChange={({value:nextvalue})=> setstud(nextvalue)} />
                </Box>
                <Box direction="row" justify="between" >
                    <Anchor color="#FF6F00" onClick={()=> {setstp2(false); setstp1(true);}} primary label="Back" />
                    <Anchor color="#FF6F00" primary label="Next" />
                </Box>
                

            </Box>
        </>
    )}
}
export default Step2;