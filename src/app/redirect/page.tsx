import { redirect } from 'next/navigation'

const Redirect = ({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) => {
    //get first param from url
    const urlParam = searchParams?.plan;
    const id = searchParams?.id;

    if (urlParam === 'monthly') {
        return redirect('https://reaction-free.lemonsqueezy.com/checkout/buy/8b71c4b2-7896-4648-aa8e-c78162e8e1d2?checkout[custom][user_id]='+id)
    }

    if (urlParam === 'founder') {
        return redirect('https://reaction-free.lemonsqueezy.com/checkout/buy/64ba9331-e2be-405e-a4cb-444d90fd1e93?checkout[custom][user_id]='+id)
    }

    return redirect('/app');
}

export default Redirect;