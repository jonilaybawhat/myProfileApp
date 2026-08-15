import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Text style={styles.logo}>PROFILE</Text>
          <Text style={styles.welcomeText}>Welcome back!</Text>
        </View>

        {/* Hero / Banner with layered "gradient" effect */}
        <View style={styles.heroWrapper}>
          <View style={styles.heroLayer1} />
          <View style={styles.heroLayer2} />
          <View style={styles.heroLayer3} />

          <View style={styles.bannerContent}>
            <View style={styles.avatarGlow}>
              <View style={styles.avatarWrapper}>
                <Image
                  source={require('../../assets/images/profile.jpg')}
                  style={styles.profileImage}
                />
              </View>
            </View>
            <Text style={styles.name}>Junio Eran Layba</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>BSIT STUDENT</Text>
            </View>
          </View>
        </View>

        {/* About Section - overlaps the hero banner slightly */}
        <View style={[styles.card, styles.cardOverlap]}>
          <View style={styles.cardAccent} />
          <Text style={styles.sectionLabel}>About Me</Text>
          <Text style={styles.introText}>
            Hi, I'm Junio! A BSIT student who loves building apps and exploring
            new technologies. I enjoy solving problems and turning ideas into
            real, working projects through code.
          </Text>
        </View>

        {/* Interests Section - normal spacing below About Me */}
        <View style={styles.card}>
          <View style={styles.cardAccent} />
          <Text style={styles.sectionLabel}>My Interests</Text>

          <View style={styles.interestRow}>
            <View style={styles.iconOuter}>
              <View style={[styles.iconInner, styles.iconRedTop]} />
              <View style={[styles.iconInner, styles.iconRedBottom]} />
              <Text style={styles.interestIcon}>🎮</Text>
            </View>
            <View style={styles.interestTextWrap}>
              <Text style={styles.interestTitle}>Playing Online Games</Text>
              <Text style={styles.interestSub}>Action • Strategy • Esports</Text>
            </View>
          </View>

          <View style={styles.interestRow}>
            <View style={styles.iconOuter}>
              <View style={[styles.iconInner, styles.iconGrayTop]} />
              <View style={[styles.iconInner, styles.iconGrayBottom]} />
              <Text style={styles.interestIcon}>🎬</Text>
            </View>
            <View style={styles.interestTextWrap}>
              <Text style={styles.interestTitle}>Watching Movies</Text>
              <Text style={styles.interestSub}>Sci-Fi • Thriller • Drama</Text>
            </View>
          </View>

          <View style={[styles.interestRow, { marginBottom: 0 }]}>
            <View style={styles.iconOuter}>
              <View style={[styles.iconInner, styles.iconRedTop]} />
              <View style={[styles.iconInner, styles.iconRedBottom]} />
              <Text style={styles.interestIcon}>💻</Text>
            </View>
            <View style={styles.interestTextWrap}>
              <Text style={styles.interestTitle}>Learning Programming</Text>
              <Text style={styles.interestSub}>Web • Mobile</Text>
            </View>
          </View>
        </View>

        <Text style={styles.footerText}>© 2026 Junio's Profile App</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 18,
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E50914',
    letterSpacing: 1.5,
  },
  welcomeText: {
    fontSize: 13,
    color: '#8C8C8C',
  },

  /* Layered "gradient" hero banner */
  heroWrapper: {
    height: 300,
    position: 'relative',
    overflow: 'hidden',
  },
  heroLayer1: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 300,
    backgroundColor: '#3A0A0F',
  },
  heroLayer2: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: '#1F1F1F',
    opacity: 0.85,
  },
  heroLayer3: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#141414',
    opacity: 0.6,
  },
  bannerContent: {
    alignItems: 'center',
    paddingTop: 30,
  },
  avatarGlow: {
    padding: 6,
    borderRadius: 76,
    backgroundColor: 'rgba(229, 9, 20, 0.25)',
    marginBottom: 16,
  },
  avatarWrapper: {
    padding: 4,
    borderRadius: 70,
    backgroundColor: '#0D0D0D',
    borderWidth: 3,
    borderColor: '#E50914',
    shadowColor: '#E50914',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  badge: {
    backgroundColor: '#E50914',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: '#E50914',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 1.2,
  },

  /* Cards */
  card: {
    backgroundColor: '#1A1A1A',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 20,
    paddingLeft: 24,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#292929',
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  cardOverlap: {
    marginTop: -40,
  },
  cardAccent: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: '#E50914',
  },
  sectionLabel: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 14,
    letterSpacing: 0.3,
  },
  introText: {
    fontSize: 14,
    color: '#ABABAB',
    lineHeight: 22,
  },

  /* Interest rows with layered icon boxes */
  interestRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  iconOuter: {
    width: 52,
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    overflow: 'hidden',
    position: 'relative',
  },
  iconInner: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  iconRedTop: {
    top: 0,
    height: 30,
    backgroundColor: '#E50914',
  },
  iconRedBottom: {
    bottom: 0,
    height: 26,
    backgroundColor: '#9E0710',
  },
  iconGrayTop: {
    top: 0,
    height: 30,
    backgroundColor: '#3D3D3D',
  },
  iconGrayBottom: {
    bottom: 0,
    height: 26,
    backgroundColor: '#232323',
  },
  interestIcon: {
    fontSize: 22,
    zIndex: 1,
  },
  interestTextWrap: {
    flex: 1,
  },
  interestTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 3,
  },
  interestSub: {
    fontSize: 12,
    color: '#7A7A7A',
    letterSpacing: 0.3,
  },

  footerText: {
    textAlign: 'center',
    color: '#4A4A4A',
    fontSize: 12,
    marginTop: 24,
    letterSpacing: 0.5,
  },
});