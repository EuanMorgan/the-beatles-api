const albumsData = [
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1440833098,
    artistName: 'The Beatles',
    collectionName: '1 (2015 Version)',
    collectionExplicitness: 'notExplicit',
    trackCount: 27,
    copyright:
      'This Compilation ℗ 2015 Calderstone Productions Limited (a division of Universal Music Group) / Apple Corps Ltd.',
    releaseDate: '2000-11-13T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1474815798,
    artistName: 'The Beatles',
    collectionName: 'Abbey Road (2019 Mix)',
    collectionExplicitness: 'notExplicit',
    trackCount: 17,
    copyright:
      '℗ 2019 Calderstone Productions Limited (a Division of Universal Music Group) / Apple Corps Limited',
    releaseDate: '1969-09-26T07:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441164604,
    artistName: 'The Beatles',
    collectionName: "Sgt. Pepper's Lonely Hearts Club Band",
    collectionExplicitness: 'notExplicit',
    trackCount: 15,
    copyright:
      '℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1967-05-26T07:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441133180,
    artistName: 'The Beatles',
    collectionName: 'The Beatles (The White Album)',
    collectionExplicitness: 'notExplicit',
    trackCount: 32,
    copyright:
      'This Compilation ℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1968-11-22T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441133100,
    artistName: 'The Beatles',
    collectionName: 'The Beatles 1967-1970 (The Blue Album)',
    collectionExplicitness: 'notExplicit',
    trackCount: 29,
    copyright:
      'This Compilation ℗ 2010 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1973-04-02T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441164359,
    artistName: 'The Beatles',
    collectionName: 'Rubber Soul',
    collectionExplicitness: 'notExplicit',
    trackCount: 16,
    copyright:
      '℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1965-12-03T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441164670,
    artistName: 'The Beatles',
    collectionName: 'Revolver',
    collectionExplicitness: 'notExplicit',
    trackCount: 16,
    copyright:
      '℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1966-08-05T07:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441132965,
    artistName: 'The Beatles',
    collectionName: 'The Beatles 1962-1966 (The Red Album)',
    collectionExplicitness: 'notExplicit',
    trackCount: 27,
    copyright:
      'This Compilation ℗ 2010 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1973-04-02T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441133389,
    artistName: 'The Beatles',
    collectionName: 'Love',
    collectionExplicitness: 'notExplicit',
    trackCount: 28,
    copyright:
      '℗ 2011 Calderstone Productions Limited (a division of Universal Music Group) / Apple Corps Ltd.',
    releaseDate: '2006-11-20T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441163490,
    artistName: 'The Beatles',
    collectionName: 'Magical Mystery Tour',
    collectionExplicitness: 'notExplicit',
    trackCount: 13,
    copyright:
      'This Compilation ℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1967-11-27T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441164495,
    artistName: 'The Beatles',
    collectionName: 'Let It Be',
    collectionExplicitness: 'notExplicit',
    trackCount: 14,
    copyright:
      '℗ 2009 Calderstone Productions Limited (a division of Universal Music Group) / Apple Corps Ltd.',
    releaseDate: '1970-05-08T07:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441164524,
    artistName: 'The Beatles',
    collectionName: 'Help!',
    collectionExplicitness: 'notExplicit',
    trackCount: 16,
    copyright:
      '℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1965-08-06T07:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441164416,
    amgArtistId: 3644,
    artistName: 'The Beatles',
    collectionName: "A Hard Day's Night",
    collectionExplicitness: 'notExplicit',
    trackCount: 15,
    copyright:
      'This Compilation ℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1964-07-10T07:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441164816,
    artistName: 'The Beatles',
    collectionName: 'Please Please Me',
    collectionExplicitness: 'notExplicit',
    trackCount: 16,
    copyright:
      '℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1963-03-22T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441164362,
    artistName: 'The Beatles',
    collectionName: 'With The Beatles',
    collectionExplicitness: 'notExplicit',
    trackCount: 16,
    copyright:
      '℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1963-11-22T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441165005,
    artistName: 'The Beatles',
    collectionName: 'Beatles For Sale',
    collectionExplicitness: 'notExplicit',
    trackCount: 16,
    copyright:
      '℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1964-12-04T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441132606,
    artistName: 'The Beatles',
    collectionName: 'Let It Be... Naked',
    collectionExplicitness: 'notExplicit',
    trackCount: 11,
    copyright:
      '℗ 2013 Apple Corps Limited/Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '2003-11-17T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441133181,
    artistName: 'The Beatles',
    collectionName: 'Past Masters, Vols. 1 & 2',
    collectionExplicitness: 'notExplicit',
    trackCount: 34,
    copyright:
      'This Compilation ℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1988-03-07T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1440881011,
    artistName: 'The Beatles',
    collectionName: "Sgt. Pepper's Lonely Hearts Club Band (Deluxe Edition)",
    collectionExplicitness: 'notExplicit',
    trackCount: 32,
    copyright:
      '℗ 2017 Calderstone Productions Limited (a Division of Universal Music Group) / Apple Corps Limited',
    releaseDate: '1967-06-01T07:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441164525,
    artistName: 'The Beatles',
    collectionName: 'Yellow Submarine',
    collectionExplicitness: 'notExplicit',
    trackCount: 15,
    copyright:
      '℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1968-07-17T07:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441132556,
    artistName: 'The Beatles',
    collectionName: 'Yellow Submarine Songtrack',
    collectionExplicitness: 'notExplicit',
    trackCount: 15,
    copyright:
      '℗ 1999 Calderstone Productions Limited (a division of Universal Music Group) / Apple Corps Ltd.',
    releaseDate: '1999-09-13T07:00:00Z',
    primaryGenreName: 'Soundtrack'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1445521937,
    artistName: 'The Beatles',
    collectionName: 'The Beatles Bootleg Recordings 1963',
    collectionExplicitness: 'notExplicit',
    trackCount: 59,
    copyright:
      '℗ 2013 The copyright in these sound recordings is owned by Calderstone Productions Limited (a division of Universal Music Group).',
    releaseDate: '2013-01-01T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1440831973,
    artistName: 'The Beatles',
    collectionName: 'On Air: Live at the BBC, Vol. 2',
    collectionExplicitness: 'notExplicit',
    trackCount: 64,
    copyright:
      'This Compilation ℗ 2013 The copyright in this sound recording is owned by BBC under exclusive licence to Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '2013-01-01T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441151443,
    artistName: 'The Beatles',
    collectionName: 'Anthology Highlights',
    collectionExplicitness: 'notExplicit',
    trackCount: 23,
    copyright:
      'This Compilation ℗ 2011 Apple Corps Ltd. / Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '2011-06-14T07:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441164426,
    artistName: 'The Beatles',
    collectionName: 'Abbey Road (Remastered)',
    collectionExplicitness: 'notExplicit',
    trackCount: 19,
    copyright:
      'This Compilation ℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1969-09-26T07:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1445522423,
    artistName: 'The Beatles',
    collectionName: 'Live at the BBC',
    collectionExplicitness: 'notExplicit',
    trackCount: 71,
    copyright:
      'This Compilation ℗ 2013 The copyright in this sound recording is owned by BBC under exclusive licence to Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '2013-11-08T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441159224,
    artistName: 'The Beatles',
    collectionName: 'Anthology Box Set',
    collectionExplicitness: 'notExplicit',
    trackCount: 155,
    copyright:
      'This Compilation ℗ 2010 Apple Corps Ltd. / Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '2010-11-16T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1474833332,
    artistName: 'The Beatles',
    collectionName: 'Abbey Road (Super Deluxe Edition)',
    collectionExplicitness: 'notExplicit',
    trackCount: 40,
    copyright:
      'This Compilation ℗ 2019 Calderstone Productions Limited (a Division of Universal Music Group) / Apple Corps Limited',
    releaseDate: '1969-09-26T07:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1436905161,
    artistName: 'The Beatles',
    collectionName: 'The Beatles (White Album) [Super Deluxe]',
    collectionExplicitness: 'notExplicit',
    trackCount: 107,
    copyright:
      'This Compilation ℗ 2018 Calderstone Productions Limited (a Division of Universal Music Group) / Apple Corps Limited',
    releaseDate: '1968-11-22T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441145645,
    artistName: 'The Beatles',
    collectionName: 'Anthology 3',
    collectionExplicitness: 'notExplicit',
    trackCount: 50,
    copyright:
      'This Compilation ℗ 1996 Apple Corps Ltd. / Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1996-10-28T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1468023095,
    artistName: 'The Beatles',
    collectionName: 'The U.S. Albums',
    collectionExplicitness: 'notExplicit',
    trackCount: 277,
    copyright:
      'This Compilation ℗ 2014 The copyright in this compilation is owned by Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '2014-01-20T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1436887422,
    artistName: 'The Beatles',
    collectionName: 'The Beatles (White Album) [Deluxe]',
    collectionExplicitness: 'notExplicit',
    trackCount: 57,
    copyright:
      'This Compilation ℗ 2018 Calderstone Productions Limited (a Division of Universal Music Group) / Apple Corps Limited',
    releaseDate: '1968-11-22T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441145575,
    artistName: 'The Beatles',
    collectionName: 'Anthology 2',
    collectionExplicitness: 'notExplicit',
    trackCount: 45,
    copyright:
      'This Compilation ℗ 1996 Apple Corps Ltd. / Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1996-03-18T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441152311,
    artistName: 'The Beatles',
    collectionName: 'Anthology 1',
    collectionExplicitness: 'notExplicit',
    trackCount: 60,
    copyright:
      'This Compilation ℗ 1995 Apple Corps Ltd. / Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '1995-11-20T08:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441169302,
    artistName: 'The Beatles',
    collectionName: 'The Beatles Boxset',
    collectionExplicitness: 'notExplicit',
    trackCount: 240,
    copyright:
      'This Compilation ℗ 2009 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '2009-09-09T07:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1440870582,
    artistName: 'The Beatles',
    collectionName: 'Live at the Hollywood Bowl',
    collectionExplicitness: 'notExplicit',
    trackCount: 17,
    copyright:
      '℗ 2016 Calderstone Productions Limited (a division of Universal Music Group) / Apple Corps Ltd.',
    releaseDate: '2016-09-09T07:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1435552131,
    artistName: 'The Beatles',
    collectionName:
      "Sgt. Pepper's Lonely Hearts Club Band (Super Deluxe Edition)",
    collectionExplicitness: 'notExplicit',
    trackCount: 65,
    copyright:
      'This Compilation ℗ 2017 Calderstone Productions Limited (a Division of Universal Music Group) / Apple Corps Limited',
    releaseDate: '1967-05-26T07:00:00Z',
    primaryGenreName: 'Rock'
  },
  {
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 1441132415,
    artistName: 'The Beatles',
    collectionName: 'Tomorrow Never Knows',
    collectionExplicitness: 'notExplicit',
    trackCount: 15,
    copyright:
      'This Compilation ℗ 2012 Calderstone Productions Limited (a division of Universal Music Group)',
    releaseDate: '2012-07-24T07:00:00Z',
    primaryGenreName: 'Rock'
  }
];

module.exports = albumsData;
