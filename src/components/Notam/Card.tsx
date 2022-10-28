import Image from 'next/image';
import Container from '../Utils/Container';
import Tag from './Tag';
import { PostListing } from '../../lib/notams/posts';

const Card = (props: PostListing) => (
    <div className="grid rounded-lg bg-secondary-accent-dark">
        <span>
            <Image src={props.metaImage} alt={props.metaAlt} objectFit="cover" width={800} height={600} className="rounded-t-lg" />
        </span>
        <Container className="grid py-4">
            <span className="flex items-center justify-between gap-4">
                <small className="text-gray-400">
                    Posted:
                    {' '}
                    {`${props.date.substring(8)}/${props.date.substring(5, 7)}/${props.date.substring(0, 4)}`}
                </small>
                <Tag category={props.category} />
            </span>
            <h3>{props.title}</h3>
            <p className="py-4">{props.description}</p>
            <h5 className="text-gray-400">{props.readingStats}</h5>
        </Container>
    </div>
);

export default Card;
