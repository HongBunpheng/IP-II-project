<template>
    <div class="journal-list">
        <div class="grid-container">
            <div class="journal-box" v-for="(journal, index) in journals" :key="index">
                <img :src="journal.image" alt="Cover" class="cover-image" />

                <div class="journal-details">
                    <!-- Author Info -->
                    <div class="author-section">
                        <div class="author-top-row">
                            <img :src="journal.authorImage" alt="Author" class="author-avatar" />
                            <div class="author-name">{{ journal.authorName }}</div>
                        </div>

                        <div class="location-date-row">
                            <div class="location">{{ journal.location }}</div>
                            <div class="date-read">
                                <span>{{ journal.date }}</span>
                                <span class="dot">•</span>
                                <span>{{ journal.readTime }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Title & Content -->
                    <h2 class="title">{{ journal.title }}</h2>
                    <p class="description">{{ journal.description }}</p>

                    <!-- Read More -->
                    <a :href="journal.link" class="read-more" to="/ReadFullPost">
                        <router-link to="/ReadFullPost">Read Full Post</router-link>
                        <span class="arrow">↗</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'JournalBox',
    data() {
        return {
            journals: [
{
          image: '/src/assets/i1.png',
          authorImage: '/src/assets/profile.png',
          authorName: 'Mina',
          location: 'Kep Province',
          date: 'Feb 27, 2023',
          readTime: '8 min read',
          title: 'The Best Time to visit Sea',
          description: 'I had always been interested in Kep...',
          link: '#'
        },
        {
          image: '/src/assets/i2.png',
          authorImage: '/src/assets/profile.png',
          authorName: 'Renald DeVor',
          location: 'Phnom Kulen',
          date: 'Feb 27, 2023',
          readTime: '5 min read',
          title: 'The Best Time to visit Phnom Kulen',
          description: 'Phnom Kulen is a national park in Cambodia...',
          link: '#'
        },
        {
          image: '/src/assets/i3.png',
          authorImage: '/src/assets/profile.png',
          authorName: 'Renald DeVor',
          location: 'Phnom Kulen',
          date: 'Feb 27, 2023',
          readTime: '5 min read',
          title: 'The Best Time to visit Phnom Kulen',
          description: 'Phnom Kulen is a national park in Cambodia...',
          link: '#'
        },
        {
          image: '/src/assets/i4.png',
          authorImage: '/src/assets/profile.png',
          authorName: 'Renald DeVor',
          location: 'Phnom Kulen',
          date: 'Feb 27, 2023',
          readTime: '5 min read',
          title: 'The Best Time to visit Phnom Kulen',
          description: 'Phnom Kulen is a national park in Cambodia...',
          link: '#'
        },
        {
          image: '/src/assets/i5.png',
          authorImage: '/src/assets/profile.png',
          authorName: 'Renald DeVor',
          location: 'Phnom Kulen',
          date: 'Feb 27, 2023',
          readTime: '5 min read',
          title: 'The Best Time to visit Phnom Kulen',
          description: 'Phnom Kulen is a national park in Cambodia...',
          link: '#'
        },
        {
          image: '/src/assets/i6.png',
          authorImage: '/src/assets/profile.png',
          authorName: 'Renald DeVor',
          location: 'Phnom Kulen',
          date: 'Feb 27, 2023',
          readTime: '5 min read',
          title: 'The Best Time to visit Phnom Kulen',
          description: 'Phnom Kulen is a national park in Cambodia...',
          link: '#'
        },
        {
          image: '/src/assets/i7.png',
          authorImage: '/src/assets/profile.png',
          authorName: 'Renald DeVor',
          location: 'Phnom Kulen',
          date: 'Feb 27, 2023',
          readTime: '5 min read',
          title: 'The Best Time to visit Phnom Kulen',
          description: 'Phnom Kulen is a national park in Cambodia...',
          link: '#'
        },
        {
          image: '/src/assets/i8.png',
          authorImage: '/src/assets/profile.png',
          authorName: 'Renald DeVor',
          location: 'Phnom Kulen',
          date: 'Feb 27, 2023',
          readTime: '5 min read',
          title: 'The Best Time to visit Phnom Kulen',
          description: 'Phnom Kulen is a national park in Cambodia...',
          link: '#'
        },
        {
          image: '/src/assets/i9.png',
          authorImage: '/src/assets/profile.png',
          authorName: 'Renald DeVor',
          location: 'Phnom Kulen',
          date: 'Feb 27, 2023',
          readTime: '5 min read',
          title: 'The Best Time to visit Phnom Kulen',
          description: 'Phnom Kulen is a national park in Cambodia...',
          link: '#'
        },
        {
          image: '/src/assets/i10.png',
          authorImage: '/src/assets/profile.png',
          authorName: 'Renald DeVor',
          location: 'Phnom Kulen',
          date: 'Feb 27, 2023',
          readTime: '5 min read',
          title: 'The Best Time to visit Phnom Kulen',
          description: 'Phnom Kulen is a national park in Cambodia...',
          link: '#'
        }

            ]
        }
    }
}
</script>

<style scoped>
.journal-list {
    padding: 48px 24px;
    max-width: 1800px;
    margin: 0 auto;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
    gap: 40px;
}


.journal-box {
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cover-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 15px 15px 15px 15px;
    display: block;
}

.journal-details {
    padding: 32px;
}

.author-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
    width: 100%;
}

.author-top-row {
    display: flex;
    align-items: center;
    gap: 12px;
}

.author-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
}

.author-name {
    font-weight: 600;
    font-size: 18px;
    color: #111;
}

.location-date-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    color: #666;
    width: 100%;
}

.location {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.date-read {
    display: flex;
    gap: 8px;
    white-space: nowrap;
    flex-shrink: 0;
    align-items: center;
}

.dot {
    font-size: 10px;
}

.title {
    font-size: 26px;
    font-weight: 700;
    color: #111;
    margin: 20px 0 12px 0;
}

.description {
    font-size: 17px;
    color: #444;
    margin-bottom: 28px;
}

.read-more {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    color: #00c896;
    text-decoration: none;
    font-size: 16px;
}

.arrow {
    margin-left: 6px;
}

@media (max-width: 768px) {
    .journal-details {
        padding: 20px;
    }

    .title {
        font-size: 22px;
    }

    .description {
        font-size: 15px;
    }

    .author-avatar {
        width: 40px;
        height: 40px;
    }
}
</style>