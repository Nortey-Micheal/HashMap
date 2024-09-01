function HashMap () {
    let Buckets = []
    let BucketSize = 16;
    Buckets.length = BucketSize;



    const Hash = (key) => {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % BucketSize;
        }
        console.log(hashCode)

        return hashCode;
    }

    const set = (key,value) => {
        let hashCode = Hash(key);
        // let length = length();
        if (length() >= (BucketSize * 7.5)) {
            BucketSize *= 2;
            
        }
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
                    if (Buckets[index].key === undefined) {
                        continue;
                    } else {
                        newObj = {key: `${Buckets[index].key}`,value: `${Buckets[index].value}`};
                        Entries.push(newObj)
                    }
                }
            }
        }

        return Entries
    }

    const get = (key) => {
        let hashCode = Hash(key);
        let value;
        if (Buckets[hashCode]) {
            let temp = Buckets[hashCode];
            while (temp !== null) {
                if (temp.key === key) {
                    value = temp.value;
                    break;
                } else {
                    value = null;
                    temp = temp.nextNode;
                }
            }

        } else {
            value = null;
        }

        return value;
    }

    const has = (key) => {
        let hashCode = Hash(key)
        if (Buckets[hashCode]) {
            let temp = Buckets[hashCode];
            while (temp !== null) {
                if (temp.key === key) {
                    return true;
                } else {
                    temp = temp.nextNode;
                }
            }
            
            if (temp === null) return false;

        } else {
            return false;
        }
    }

    const remove = (key) => {
        let hashCode = Hash(key);
        if (Buckets[hashCode].key === key) {
            let newNode = Buckets[hashCode].nextNode
            Buckets[hashCode] = newNode;
            return true;
        } else {
            let temp = Buckets[hashCode];
            while (temp.nextNode !== null) {
                if (temp.nextNode.key === key) {
                    let newNode = temp.nextNode.nextNode;
                    temp.nextNode = newNode;
                    return true;
                } else {
                    temp = temp.nextNode;
                }
            }
            return false;
        }
    }

    const length = () => {
        let count = 0;
        for(index in Buckets) {
            if(Buckets[index]) {
                if (Buckets[index].nextNode) {
                    count++;
                    let temp = Buckets[index].nextNode;
                    while (temp.nextNode !== null) {
                        count++;
                        temp = temp.nextNode;
                    }
                    
                } else {
                    if (Buckets[index].key === undefined) {
                        continue;
                    } else {
                        count++
                    }
                }
            }
        }
        return "<<<<<<< " + count + " >>>>>>";
    }

    const clear = () => {
        Buckets = [];
        Buckets.length = BucketSize
    }

    const keys = () => {
        const Keys = [];
        
        for(index in Buckets) {
            if(Buckets[index]) {
                let newObj = {};
                if (Buckets[index].nextNode) {
                    let temp = Buckets[index].nextNode;
                    let newObj1 = {key: `${temp.key}`};
                    Keys.push(newObj1)
                    while (temp.nextNode !== null) {
                        newObj = {key: `${temp.nextNode.key}`}
                        Keys.push(newObj) ;
                        temp = temp.nextNode;
                    }
                    
                } else {
                    if (Buckets[index].key === undefined) {
                        continue;
                    } else {
                        newObj = {key: `${Buckets[index].key}`};
                        Keys.push(newObj)
                    }
                }
            }
        }

        return Keys;
    }

    const values = () => {
        const Values = [];
        
        for(index in Buckets) {
            if(Buckets[index]) {
                let newObj = {};
                if (Buckets[index].nextNode) {
                    let temp = Buckets[index].nextNode;
                    let newObj1 = {Value: `${temp.value}`};
                    Values.push(newObj1)
                    while (temp.nextNode !== null) {
                        newObj = {Value: `${temp.nextNode.value}`}
                        Values.push(newObj) ;
                        temp = temp.nextNode;
                    }
                    
                } else {
                    if (Buckets[index].key === undefined) {
                        continue;
                    } else {
                        newObj = {Value: `${Buckets[index].value}`};
                        Values.push(newObj)
                    }
                }
            }
        }

        return Values;
    }

    return {
        Hash,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries,
        Buckets
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
test.set('moon', 'silver')
test.set('moon', 'silver')

console.log(test.Buckets.length)
console.log(test.entries())
console.log(test.length())
console.log(test.keys())
console.log(test.get('dog'))
console.log(test.has('monkey'))
console.log(test.remove('kite'))
console.log(test.entries())
console.log(test.length())
console.log(test.keys())
console.log(test.values())
test.clear()
console.log(test.entries())
console.log(test.length())
console.log(test.keys())
console.log(test.values())

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('carrot', 'orange')
test.set('dog', 'brown')

console.log(test.entries())
console.log(test.length())
console.log(test.keys())
console.log(test.values())
console.log(test.Buckets.length)