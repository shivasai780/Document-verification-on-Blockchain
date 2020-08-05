pragma solidity ^0.4.17;
contract  Create_Org{
    address[] org_addresses;
    uint minimum_amount=10;
    function New_Organization(string name,address eth_address)public{
         address orgaddress=new Organization(name,eth_address,msg.sender,minimum_amount);
         org_addresses.push(orgaddress);
    }
    function getOrganization_address()view public returns(address[])
    {
        return org_addresses;
        
    }
}
contract Organization
{
    struct Hashe{
        string hash;
    }
   
    Hashe[] public list_of_members;
    string public name;
    address public eth_address;
    address public Owner;
    uint public minimum_oper;
    modifier Only_Owner(){
        require(msg.sender == Owner);
        _;
        _;
    }
    function Organization(string _name,address my_address,address Sender,uint min)public
    {
        name=_name;
        eth_address=my_address;
        Owner=Sender;        
        minimum_oper=min;
        
    }
    function add(string member)public   payable Only_Owner returns(bool)
    {
        require(msg.value >= minimum_oper);
        
        if(list_of_members.length > 0)
        {
            
            for(uint i=0;i<list_of_members.length;i++)
            {
                if(String_com(list_of_members[i].hash,member))
                {
                   // revert();
                   return false;
                     
                }
                //assert(String_com(list_of_members[i].hash,member)==false);
            }
          
        }
        
        Hashe memory new_data1=Hashe({hash:member});
        list_of_members.push(new_data1);
        return true;
        
        
      
    }
    
    function Delete_user(string member) public Only_Owner
    {
        
        
        for(uint i=0;i<list_of_members.length;i++)
        {
            if(String_com(list_of_members[i].hash,member)==true){
                list_of_members[i]=list_of_members[list_of_members.length-1];
                delete list_of_members[list_of_members.length-1];
                list_of_members.length--;
                
                return;
                
            }
        }
    }
    function verify(string member) public payable returns(bool)
    {
        require(msg.value > minimum_oper);
      
        for(uint i=0;i<list_of_members.length;i++){
            
            if(String_com(list_of_members[i].hash,member)==true){
                return true;
            }
            else
            {
                return false;
                
            }
        }
    }
 function String_com(string storage _a,string memory _b)internal returns(bool)
    {
        bytes storage a=bytes(_a);
        bytes memory b=bytes(_b);
        if(a.length != b.length)
        {
            return false;
        }
        for(uint i=0;i<a.length;i++){
            if(a[i] != b[i]){
                return false;
            }
            
        }
        return true;
       
        
        
        
    }
    
    
    
    
}