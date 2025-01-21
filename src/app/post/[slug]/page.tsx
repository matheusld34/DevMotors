import styles from './styles.module.scss'
import { getItemBySlug } from '@/utils/actions/get-data'
import { PostProps } from '@/utils/post.type'
export default async function Page({ params: { slug } }: {
    params: { slug: string }
}) {
    const { objects }: PostProps = await getItemBySlug(slug)
    return (
        <div>
            <h1>TESTE {slug}</h1>
        </div>
    )
}