# Document-verification-on-Blockchain
Now-a-days it is very easy to get duplicate Documents As There are a lot of website surfing on the internet to provide you fake documents of any source .
Blockchain provides you the temper-proof solution for your documents.
I will take an scenario to explain you how my project is gonna work 

>Consider you  have an organization or an college with 100 people so you can store  the documents of 100 people on Blockchain (Remember that it only going to store the hash of the document )
when someone from your college gone for interview the Hr needs to check that is your document is valid(you are recognized from the organization or not).Then he will upload the document on the specfic organization portal
and it automatically checks the document hash and returns result(that the member is authentic or not)

# Getting Started
**Now lets get started how to work with the Project**

To Store hash on the Blockchain you need to convert your file into hash .There are two ways to do it
```
1.Convert your file to Buffer and then convert to hash(using an hashing algorithm(SHA256))and the store it on the blockchian.
2.Convert your file to Buffer and store on the ipfs-network(An decentralized file storage network)which gives you an unique id for any file and u can store that id into Blockchain
```
## Prerequisites
>1.[Matamask](https://metamask.io/)(wallet connected to your browser)].</br>
>2.Account on [infure.io](https://infura.io/) provider to communicate with the node on Blockchain network for reading and writing data on blockchain
