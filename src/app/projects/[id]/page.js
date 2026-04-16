import Link from 'next/link';
import styles from './page.module.css';

export default async function ProjectDetail({ params }) {
    // Extract project ID from dynamic routing params
    const { id } = await params;

    return (
        <main className={styles.detailPage}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Link href="/#projects" className={styles.backButton}>
                        ← Back to Portfolio
                    </Link>
                    <h1 className={styles.title}>Architecture Deep Dive (Project {id})</h1>
                </div>

                <section className={styles.videoSection}>
                    <h2 className={styles.sectionTitle}>Full Demonstration</h2>
                    <div className={styles.videoEmbed}>
                        <div className={styles.placeholder}>
                            <span>YouTube Video Embed Placeholder (Unlisted)</span>
                        </div>
                    </div>
                </section>

                <section className={styles.architectureSection}>
                    <h2 className={styles.sectionTitle}>System Architecture</h2>
                    <div className={styles.imageGrid}>
                        <div className={styles.imagePlaceholder}>
                            <span>Architecture Diagram Placeholder (Extracted from PPT)</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
