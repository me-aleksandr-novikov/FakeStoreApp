import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/loader';
import { Product } from './components/product'
import { useProducts } from './hooks/products';



function App() {
  const {loading, products, error} = useProducts()

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader/>}
      {error && <ErrorMessage error={error}/>}
      {products.map(product => <Product product={product} key={product.id} />)}

    </div>
  )
}

export default App;
