import React from 'react';
import { 
    Alert, 
    AlertIcon, 
    Input, 
    Image,
    IconButton, 
    Button, 
    ButtonGroup, 
    Box, 
    Center, 
    Grid, 
    Tabs, 
    Table, 
    Thead,
    Tbody, 
    Tr, 
    Th, 
    Td,
    FormControl, 
    InputGroup} from '@chakra-ui/react';
import GuestList from './GuestList';


export default function GuestForm({item, currentUser, todaysList, usersDatabase}) {
    const [guestInfo, setGuestInfo] = React.useState({
        guest_image:'',
        first_name: "",
        last_name: "",
        phone_number: "",
        membership: "guest"
      })
    const [guestName, setGuestName] = React.useState('')
    const [guesList, setGuestList] =React.useState([])

    React.useEffect(() => {
        console.log('iteem geu', item.perks.guest)
      setGuestList(item.perks?.guest)

    // setGuestList(usersDatabase[0].perks.guest)

    }, [])
    
    const handleChange =async(e)=>{
        const value = e.target.value;
        await setGuestInfo({
            ...guestInfo,
            id: guesList?guesList.length+1:0,
            guest_image: `https://picsum.photos/id/11${guesList?guesList.length+1:0}/200/200`,
            [e.target.name]: value,

          })

    }
    const submitHandler =async(e)=>{
        e.preventDefault();
        console.log('here', todaysList[0].perks.guest)
        await setGuestList([guestInfo,...guesList])

        setGuestInfo({
            guest_image:"",
            first_name: "",
            last_name: "",
            phone_number: "",
          })

    }
    console.log('guestlist', guesList)
    console.log('curr user', currentUser)

  return (
    <div>
        <div>
            <Table size='sm'>
                <Tbody>
                    {guesList?.map((item,i)=>(
                    <Tr key={i}>
                        <Td>
                        <Image 
                            boxSize='45px' 
                            borderRadius='10px'
                            src={item.guest_image} alt={item.first_name} /></Td>
                        <Td>{item.first_name} {item.last_name}</Td>
                        <Td>{item.phone_number}</Td>
                    </Tr>
                    ))}
                </Tbody>
            </Table>

        </div>
    <form onSubmit={submitHandler}>
        <InputGroup>
            <Input 
            placeholder="first name"
            name="first_name"
            value={guestInfo.first_name}
            type="text"
            onChange={handleChange}/>
            <Input 
            placeholder='last name'
            name="last_name"
            value={guestInfo.last_name}
            type="text"
            onChange={handleChange}/>
            <Input 
            placeholder='phone number'
            name="phone_number"
            value={guestInfo.phone_number}
            type="number"
            onChange={handleChange}/>
        </InputGroup>

    <Button type="submit" >Submit</Button>
    </form>
    </div>
  )
}
