function HashMap () {
    let Buckets = []
    let BucketSize = 16;
    Buckets.length = BucketSize



    const Hash = (key) => {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
        }
        console.log(hashCode)

        return hashCode;
    }

    const set = (key,value) => {
        let hashCode = Hash(key);

        if (hashCode < 0 || hashCode >= Buckets.length) {
            throw new Error("Trying to access index out of bound");
        }

        if (!Buckets[hashCode]) {
            let list = new LinkedList();
            list.nextNode = new Node(value,key)
            Buckets[hashCode] = list
        } else {
            let temp = Buckets[hashCode].nextNode;
            while (temp.nextNode !== null && temp.key !== key) {
                temp = temp.nextNode;
            }
            if (temp.nextNode === null) {
                temp.nextNode = new Node(value, key)
            } else {
                if (temp.key === key) {
                    temp.value = value;
                } else if (temp.key !== key) {
                    temp.nextNode = new Node(value,key)
                }
            }
        }
    }

    const entries = () => {
        const Entries = [];
        
        for(index in Buckets) {
            if(Buckets[index]) {
                let newObj = {};
                if (Buckets[index].nextNode) {
                    let temp = Buckets[index].nextNode;
                    let newObj1 = {key: `${temp.key}`,value: `${temp.value}`};
                    Entries.push(newObj1)
                    while (temp.nextNode !== null) {
                        newObj = {key: `${temp.nextNode.key}`,value: `${temp.nextNode.value}`}
                        Entries.push(newObj) ;
                        temp = temp.nextNode;
                    }
                    
                } else {
                    newObj = {key: `${Buckets[index].key}`,value: `${Buckets[index].value}`};
                    Entries.push(newObj)
                }
            }
        }

        return Entries
    }

    return {
        Hash,
        set,
        entries
    }
}

function Node (value = null,key = null,next = null) {
    this.value = value;
    this.key = key;
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
        append,
    }
}

const test = HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.entries())