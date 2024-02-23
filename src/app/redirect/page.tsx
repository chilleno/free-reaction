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
        return redirect('https://reaction-free.lemonsqueezy.com/checkout/buy/2d778270-276f-4ffb-a4cb-e4722314151b?checkout[custom][user_id]='+id)
    }

    if (urlParam === 'founder') {
        return redirect('https://reaction-free.lemonsqueezy.com/checkout/buy/4a742530-f29c-4521-b47c-e86bc63a0de1?checkout[custom][user_id]='+id)
    }

    return redirect('/app');
}

export default Redirect;