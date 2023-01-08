import { useRouter } from 'next/router';

function DetailPage() {
    const router = useRouter();

    const newId = router.query.newId;

    return <h1>The Detail Page</h1>;
}

export default DetailPage;
