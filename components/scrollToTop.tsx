import { NextRouter, Router, useRouter, withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface WithRouterProps {
    router: NextRouter
}

/**
 * 画面遷移のたびにスクロール位置をトップに持ってくるコンポーネント
 */
const ScrollToTop: React.FC<WithRouterProps> = ({ router }) => {
    const [prevPath, setPath] = useState('')

    useEffect(() => {
        if (prevPath !== router.asPath)
            window.scrollTo(0, 0);
        setPath(router.asPath)
    }, [router.asPath])

    return <></>
}

const wr = withRouter(ScrollToTop);

export { wr as ScrollToTop }; 