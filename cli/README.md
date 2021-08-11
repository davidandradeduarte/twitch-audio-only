# Golang cli

Create a golang cli bin to receive the m3u8 as parameter and start using `ffmpeg` to split the audio into `.ts` file segments and delete them after they'r played.  
We can make use of channels to split the work - converting, playing and deleting.
