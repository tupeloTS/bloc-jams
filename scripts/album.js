
var createSongRow = function(songNumber, songName, songLength) {
    var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

    var $row = $(template);

    var songNumber = parseInt($(this).attr('data-song-number'));
    
    var clickHandler = function() {
        
        var songNumber = $(this).attr('data-song-number');
        
        if(currentlyPlayingSongNumber !== null) {
            
            var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSongNumber + '"]');
            currentlyPlayingCell.html(currentlyPlayingSongNumber);
        }
        
        if (currentlyPlayingSongNumber !== songNumber) {
            // Switch from Play -> Pause button to indicate new song is playing.
            $(this).html(pauseButtonTemplate);
            currentlyPlayingSongNumber = songNumber;
            currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
            updatePlayerBarSong();
        }

        else if (currentlyPlayingSongNumber === songNumber) {
            // Switch from Pause -> Play button to pause currently playing song.
            $(this).html(playButtonTemplate);
            $('.main-controls .play-pause').html(playerBarPauseButton
            currentlyPlayingSong = null;
            currentlyPlayingSongNumber = null;
            currentSongFromAlbum = null;
        }

    };
};
    
    var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        
        if (songNumber !== currentlyPlayingSongNumber) {
            songNumberCell.html(playButtonTemplate);
            console.log("songNumber type is " + typeof songNumber + "\n and currentlyPlayingSongNumber type is " + typeof                 currentlyPlayingSongNumber);
        }
    };
    
    var offHover = function(event) {
        var songNumberCell = $(this).find('song-item-number');
        var songNumber = songNumberCell.attr('data-song-number')'
        
        if (songNumber !== currentlyPlayingSongNumber) {
            songNumberCell(songNumber);
        }   
    };
    $row.find('song-item-number').click(clickHandler);
    
    $row.hover(onHover, offHover);
    
    return $row;

};

var setCurrentAlbum = function(album) {
    currentAlbum = album;
    var $albumTitle = $('.album-view-title');
    var $albumArtist = $('.album-view-artist');
    var $albumReleaseInfo = $('.album-view-release-info');
    var $albumImage = $('.album-cover-art');
    var $albumSongList = $('.album-view-song-list');

    $albumTitle.text(album.name);
    $albumArtist.text(album.artist);
    $albumReleaseInfo.text(album.year + ' ' + album.label);
    $albumImage.attr('src', album.albumArtUrl);

    $albumSongList.empty();

    for (i = 0; i < album.songs.length; i++) {
        var $newRow= createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
        $albumSongList.append($newRow);
    }
    var updatePlayerBarSong(album) {
        $('.currently-playing .song-name').text(currentSongFromAlbum.name);
        $('.currenty-playing .artist-song-mobile').text(currentSongFromAlbum.mobile);
        $('.currently-playing .artist-name').text(currentSongFromAlbum.artist);
        $('.main-controls .play-pause').html(playerBarPauseButton);
    };
};

        
    var trackIndex = function(album, song) {
     return album.songs.indexOf(song);
 };
    var nextSong = function() {
        return index == 0 ? currentAlbum.songs.length : index;
    };
        
    var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
    currentSongIndex++;
    
    if (currentSongIndex >= currentAlbum.songs.length) {
        currentSongIndex = 0;
    }
    
    currentlyPlayingSongNumber = currentSongIndex = 1;
    currentSongFromAlbum = currentAlbum.songs[currentSongIndex];
        
    $('currently-playing .song-name').text(currentSongFromAlbum.name);
    $('currently-playing .artist-name').text(currentAlbum.artist);
    $('currently-playing .artist-song-mobile').text(currentlySongFromAlbum.name = " - " + currentAlbum.name;
    $('left-controls .play-pause').html(playerBarPauseButton);
        
    $('.currently-playing .song-name').text(currentSongFromAlbum.name);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.name + " - " + currentAlbum.name);
    $('.left-controls .play-pause').html(playerBarPauseButton);
    $nextSongNumberCell.html(pauseButtonTemplate);
    $lastSongNumberCell.html(lastSongNumber);
};
    
    var previousSong = function() {
    return index == -1 ? currentAlbum.songs.lenght : index;
    }
    
    var getLastSongNumber = trackIndex(currentAlbum, currentSongFromAlbum);
    currentSongIndex--;
    
    if (currentSongIndex < currentAlbum.songs.length) {
        currentSongIndex = -1;
    
    }
    
    $('.currently-playing .song-name').text(currentSongFromAlbum.name);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.name + " - " + currentAlbum.name);
    $('.left-controls .play-pause').html(playerBarPauseButton);

    var lastSongNumber = getLastSongNumber(currentSongIndex);
    var $previousSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
    var $lastSongNumberCell = getSongNumberCell(lastSongNumber);
    
    $previousSongNumberCell.html(pauseButtonTemplate);
    $lastSongNumberCell.html(lastSongNumber);

var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var playerBarPlayButton = '<span class="ion-play"></span>';
var playerBarPauseButton = '<span class="ion-pause"></span>';
var currentAlbum = null;
var currentlyPlayingSongNumber = null;
var currentSongFromAlbum = null;
    
var $previousButton = $('.main-controls .previous');
var $nextButton = $('.main-controls .next');

$(document).ready(function() {
    setCurrentAlbum(albumPicasso);
    $previousButton.click(previousSong);
     $nextButton.click(nextSong);   
});