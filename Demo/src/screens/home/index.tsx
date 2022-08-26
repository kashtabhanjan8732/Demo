// ---------- Imports ---------- //
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Strings } from '../../common/Strings'
import AddButton from '../../components/AddButton'
import CategoriesItem from '../../components/CategoriesItem'
import ProductItem from '../../components/ProductItem'
import GlobalStyles from '../../theme/GlobalStyles'
import { utils } from '../../utils'
// ---------- Global Variables Declaration ---------- //

// ---------- Home Props Interface ---------- //
interface HomeProps {
    props: any
}

// ---------- Home Screen ---------- //
const Home = (props: any) => {
    // ---------- Variables Declaration---------- //
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    const { navigate } = props.navigation
    // ---------- Life-Cycle Method---------- //
    useEffect(() => {
        getCategories()
        getProducts()
    }, [props.navigation])
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

                let obj = { name: Strings.All, selected: true }
                let newCat = [...categories]
                newCat.splice(0, 0, obj)
                setCategories(newCat)
            }

        })
    }
    async function getProducts() {
        let payload = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + utils.token,
            },
            method: 'GET',
        }
        await fetch(utils.BASEURL + utils.products, payload).then(async (response) => {
            // console.log('response', await response.json());
            let resp = await response.json()
            // console.log('resp', resp);
            if (resp) {
                let { products, message } = resp
                setProducts(products)
                setFilteredProducts(products)
            }
        })
    }

    function changeCategories(name: string, index: number) {
        let selected = true
        let temp = categories.map((item, i) => {
            return index === i ? { ...item, selected: selected } : { ...item, selected: !selected };
        });

        if (name === Strings.All) {
            setFilteredProducts(products)
        }
        else {
            let fp = products.filter((item) => item.category === name)
            setFilteredProducts(fp)
            console.log('filteredProducts', fp);
        }
        setCategories(temp)
    }

    async function goToProduct(id: string) {
        let payload = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + utils.token,
            },
            method: 'GET',
        }
        await fetch(utils.BASEURL + utils.products + id, payload).then(async (response) => {
            // console.log('response', await response.json());
            let resp = await response.json()
            // console.log('resp', resp);
            if (resp) {
                navigate('Product', { data: resp.product })
            }
        })
    }
    // ---------- Home Screen return function---------- //
    return (
        // console.log('categories', categories),
        // console.log('products', products),
        <View style={GlobalStyles.container}>
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
                        return (<CategoriesItem item={newItem} onPress={() => changeCategories(name, index)} />)
                    }} />
            </View>
            <FlatList data={filteredProducts} numColumns={2} contentContainerStyle={{ alignSelf: 'center', }} renderItem={({ item, index }) => <ProductItem item={item} onPress={() => goToProduct(item?._id)} />} />
            <AddButton extraStyle={GlobalStyles.addBtn} onPress={() => navigate('Create')} />
        </View>
    )
}

const styles = StyleSheet.create({

})
export default Home