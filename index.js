function Node (value = null,next = null) {
    this.value = value;
    this.nextNode = next;
}

const LinkedList = function () {
    this.value = 'head';
    this.nextNode = null;
    const append = (value) => {
        if (this.nextNode === null) return this.nextNode = new Node(value);
        else {
            let temp = this.nextNode
            while (temp.nextNode != null) temp = temp.nextNode;
            temp.nextNode = new Node(value);
        }

    }

    return {
        append
    }
}

function HashMap () {
    let Bucket = [];
    const Hash = (key) => {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
        }
     
        return hashCode;
    }

    const Set = (key,value) => {
        let hashCode = Hash(key);

        // Bucket[hashCode].key = key;
        // Bucket[hashCode].value = value;

        if (!Bucket[hashCode]) {
            Bucket[hashCode] = {
                key: key,
                value: value
            };
        }

        if (Bucket[hashCode].key === key) {
            Bucket[hashCode].value = value;
        } if (Bucket[hashCode] !== null && Bucket[hashCode].key !== key) {
            if (Bucket[hashCode].nextNode) {
                let temp = Bucket[hashCode].nextNode;
                temp.nextNode = new Node()
            }
        } 
        
    }

    return {
        Hash,
        Set
    }
}

const list = HashMap();
console.log(list.Hash("kojfi"))
console.log(list.Hash("jKofi"))

