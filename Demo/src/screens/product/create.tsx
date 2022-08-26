// ---------- Imports ---------- //
import React, { useEffect, useState } from 'react'
import { Alert, FlatList, SafeAreaView, Text, View } from 'react-native'
import { Strings } from '../../common/Strings'
import Button from '../../components/Button'
import CategoriesItem from '../../components/CategoriesItem'
import Input from '../../components/Input'
import GlobalStyles from '../../theme/GlobalStyles'
import { utils } from '../../utils'
// ---------- Global Variables Declaration ---------- //

// ---------- Create Screen ---------- //
const Create = (props: any) => {
    // ---------- Variables Declaration---------- //
    const [categories, setCategories] = useState([])
    const [selectedCat, setSelectedCat] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')
    const [imgLink, setImgLink] = useState('')
    const [devEmail, setDevEmail] = useState('mihirbavishi111@gmail.com')
    // ---------- Life-Cycle Method---------- //
    useEffect(() => {
        getCategories()
    }, [props])
    // ---------- Function Declaration---------- //
    async function getCategories() {
        let payload = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + utils.token,
            },
            method: 'GET',
        }
        await fetch(utils.BASEURL + utils.categories, payload).then(async (response) => {
            // console.log('response',await response.json() );
            let resp = await response.json()
            if (resp) {
                let { categories, message } = resp
                setCategories(categories)
            }
        })
    }
    function selectCategory(name: string, index: number) {
        console.log('name', name);
        setSelectedCat(name)
        let selected = true
        let temp = categories.map((item, i) => {
            return index === i ? { ...item, selected: selected } : { ...item, selected: !selected };
        });
        setCategories(temp)
    }

    async function createProduct() {
        if (title.length < 0 || price.length < 0 || desc.length < 0 || imgLink.length < 0 || selectedCat === '') {
            Alert.alert(Strings.FieldsErr)
        }
        else {
            let obj = {
                name: title,
                price: price,
                description: desc,
                avatar: imgLink,
                developerEmail: devEmail,
                category: selectedCat
            }
            console.log('obj', obj);

            let payload = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + utils.token,
                },
                method: 'POST',
                body: obj
            }
            await fetch(utils.BASEURL + utils.products, payload).then(async (response) => {
                console.log('response', await response);
                console.log('response', await response.json());
                // let resp = await response.json()
                // if (resp) {
                //     let { categories, message } = resp
                // }
            })
        }
    }
    // ---------- Create Screen return function---------- //
    return (
        <SafeAreaView style={GlobalStyles.container}>
            <View style={GlobalStyles.createContainer}>
                <Input placeholder={Strings.pTitle} value={title} onChangeText={(title: string) => setTitle(title)} />
                <Input placeholder={Strings.pPrice} value={price} onChangeText={(price: string) => setPrice(price)} />
                <Input placeholder={Strings.pDesc} extraStyle={GlobalStyles.createDescInput} numberOfLines={4} multiline value={desc} onChangeText={(desc: string) => setDesc(desc)} />
                <Input placeholder={Strings.pImgLink} keyboardType={'url'} value={imgLink} onChangeText={(url: string) => setImgLink(url)} />
                <Input placeholder={Strings.pDevEmail} value={devEmail} onChangeText={(email: string) => setDevEmail(email)} keyboardType={'email-address'} />
                <Text>{Strings.SelectedCategory}: {selectedCat}</Text>
                <View>
                    <FlatList style={GlobalStyles.homeCategoriesCon} showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 5, }} horizontal data={categories} renderItem={({ item, index }) => {
                            let newItem
                            if (item.hasOwnProperty('selected')) {
                                newItem = item
                            }
                            else {
                                newItem = { ...item, selected: false }
                            }
                            const { name } = newItem
                            return (<CategoriesItem item={newItem} onPress={() => selectCategory(name, index)} />)
                        }} />
                </View>
                <Button title={Strings.AddProduct} extraStyle={GlobalStyles.createAPBtn} onPress={() => createProduct()} />
            </View>
        </SafeAreaView>
    )
}
export default Create