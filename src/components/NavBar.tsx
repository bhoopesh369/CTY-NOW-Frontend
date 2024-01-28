import { Container, ButtonGroup, Button } from '@mantine/core';
import { ThemeIcon } from '@mantine/core';
import {
    IconDashboard,
    IconDashboardOff,
    IconLocation,
    IconMenu2,
    IconMessage,
    IconMicrophone,
    IconPhoto,
} from '@tabler/icons-react';
import { useState } from 'react';

import { AudioRecorder } from 'react-audio-voice-recorder';

import { Link } from 'react-router-dom';


const addAudioElement = (blob: any) => {

    const formData = new FormData();
    formData.append('audio', blob, 'recorded_audio.webm');

    fetch('http://localhost:7000/voice', {
        method: 'POST',
        body: formData,
    })
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });


    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
};

const NavBar = () => {
    const [recoding, setRecording] = useState(false);

    const HandleMicrophone = () => {
        setRecording(!recoding);
    };

    return (
        <>
            <Container
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    height: 80,
                    width: '100vw',
                    backgroundColor: 'black',
                    position: 'absolute',
                    maxWidth: '100%',
                    bottom: 0,
                }}
            >
                <Button
                    size="lg"
                    variant="filled"
                    color="blue"
                    radius="sm"
                    style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translate(-50%, -120%)',
                        borderRadius: '1000px',
                        aspectRatio: '1/1',
                        height: '70px',
                    }}
                >
                    <AudioRecorder
                        onRecordingComplete={addAudioElement}
                        audioTrackConstraints={{
                            noiseSuppression: true,
                            echoCancellation: true,
                        }}
                        downloadOnSavePress={true}
                        mediaRecorderOptions={{
                            mimeType: 'audio/webm',
                            audioBitsPerSecond: 128000,
                        }}
                        downloadFileExtension="webm"
                    />
                </Button>

                <ButtonGroup
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        height: 80,
                        width: '100vw',
                        backgroundColor: 'black',
                        position: 'absolute',
                        maxWidth: '100%',
                        bottom: 0,
                    }}
                >
                    <Link to="/map">
                        <Button size="lg" variant="filled" color="red" radius="xl">
                            <ThemeIcon
                                variant="light"
                                radius="xs"
                                size="xl"
                                color="black"
                                style={{ background: 'none' }}
                            >
                                <IconLocation />
                            </ThemeIcon>
                        </Button>
                    </Link>

                    <Link to="/chat">
                        <Button size="lg" variant="filled" color="green" radius="xl">
                            <ThemeIcon
                                variant="light"
                                radius="xs"
                                size="xl"
                                color="black "
                                style={{ background: 'none' }}
                            >
                                <IconMessage />
                            </ThemeIcon>
                        </Button>
                    </Link>

                    <Link to="/dashboard">
                        <Button size="lg" variant="filled" color="yellow" radius="xl">
                            <ThemeIcon
                                variant="light"
                                radius="xs"
                                size="xl"
                                color="black"
                                style={{ background: 'none' }}
                            >
                                <IconMenu2 />
                            </ThemeIcon>
                        </Button>
                    </Link>
                </ButtonGroup>
            </Container>
        </>
    );
};

export default NavBar;
