function HashMap () {
    const Hash = (key) => {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
        }
     
        return hashCode;
    }

    return {
        Hash
    }
}

const list = HashMap();
console.log(list.Hash("kojfi"))
console.log(list.Hash("jKofi"))
