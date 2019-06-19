import * as React from 'react';

import {
  BoardFormMethod,
  BoardFormProps,
} from 'container/board/form/boardForm.container';
import DefaultProfileImage from 'lib/svg/default-profile-image.svg';
import PictureIcon from 'lib/svg/picture-icon.svg';
import styled from 'styled-components';

const FormContentWrapper = styled.div`
  width: 97%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormBody = styled.div`
  width: 100%;
  margin-top: 2.25rem;
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FormBodyText = styled.textarea<{ height: number }>`
  width: 88%;
  height: ${props => props.height}px;
  min-height: 3.3rem;
  font-family: inherit;
  font-size: 0.875rem;
  resize: none;
  border: 0;
  box-sizing: border-box;
`;

const FormImageWrapper = styled.div`
  width: 99%;
  display: flex;
  padding-bottom: 0.75rem;
  border-bottom: solid 1px #e5e5e5;
`;

const FormImageEmpty = styled.label`
  display: inline-block;
  position: relative;
  width: 5rem;
  line-height: 5rem;
  margin-right: 1rem;
  border: 1px dashed #9a9a9a;
  cursor: pointer;
`;

const FormImageEmptyPlus = styled.span`
  display: inline-block;
  position: relative;
  padding: 0;
  width: 2px;
  height: 26px;
  background-color: #9a9a9a;
  border-radius: 2px;
  left: 40px;
  top: 4.2px;

  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    left: -12.5px;
    width: 26px;
    height: 2px;
    margin-top: -1px;
    border-radius: 2px;
    background-color: #9a9a9a;
  }
`;

const FormPreviewWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  position: relative;
  margin-right: 1rem;
`;

const FormPreviewButton = styled.span`
  position: absolute;
  right: 0px;
  width: 16px;
  height: 16px;

  &::before,
  &::after {
    position: absolute;
    content: ' ';
    height: 17px;
    width: 1px;
    left: 7px;
    background-color: #ffffff;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

const FormPreview = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
`;

const FormButtonWrapper = styled.div`
  width: 100%;
  height: 2rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.75rem;
  font-family: 'Spoqa Han Sans';
  background-color: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormImgLabel = styled.label`
  display: inline-block;
  width: 5.5rem;
  line-height: 2rem;
  border-radius: 1rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: 0;
  color: #4b4f56;
  background: url(${PictureIcon}) no-repeat;
  background-position-x: 1rem;
  background-position-y: 0.35rem;
  padding-left: 1.5rem;
  text-align: center;
  cursor: pointer;
`;

const FormSubmitButton = styled.button`
  width: 6.875rem;
  height: 100%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 1rem;
  font-weight: bold;
  border: 0;
  background-color: #4470ff;
  color: #e9ebee;
  cursor: pointer;
`;

const MAX_CONTENT_SIZE = 600;

export default class BoardFormComponent extends React.Component<
  BoardFormProps & BoardFormMethod
> {
  public state: {
    content: string;
    files: Array<{ file: File; preview: string }>;
    textAreaHeight: number;
  } = {
    content: '',
    files: [],
    textAreaHeight: 52.8,
  };
  public content: HTMLTextAreaElement | null = null;

  public componentDidUpdate(prevProps: BoardFormProps & BoardFormMethod) {
    if (
      prevProps.postBoardStatus === 'pending' &&
      this.props.postBoardStatus === 'success'
    ) {
      this.setState({
        content: '',
        files: [],
        textAreaHeight: 52.8,
      });
    }
  }

  public handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value.length <= MAX_CONTENT_SIZE) {
      this.setState({
        content: e.currentTarget.value,
        textAreaHeight: e.target.scrollHeight,
      });
    }
  };

  public handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;

    if (files && files.length > 5) {
      alert('사진은 최대 5장까지 가능합니다.');
    } else if (
      files &&
      files.length !== 0 &&
      this.state.files.length + files.length <= 5
    ) {
      Array.from(files)
        .filter(file => {
          if (file.size > 1048576) {
            alert(`${file.name} 파일이 용량이 커서 업로드할 수 없습니다.`);
          } else {
            return true;
          }
        })
        .forEach(file => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = () =>
            this.setState({
              files: this.state.files.concat({
                file,
                preview: reader.result as string,
              }),
            });
        });
    }
  };

  public removeImage = (i: number) =>
    this.setState({
      files: [
        ...this.state.files.slice(0, i),
        ...this.state.files.slice(i + 1, this.state.files.length),
      ],
    });

  public handleSubmit = () => {
    if (this.state.content.length) {
      this.props.postBoard({
        accessToken: this.props.accessToken,
        content: this.state.content,
        files: this.state.files.map(v => v.file),
      });
    }
  };

  public render() {
    const FormPreviews = Array(5)
      .fill(null)
      .map((_, i) => {
        const file = this.state.files[i];

        if (file) {
          return (
            <FormPreviewWrapper key={i}>
              <FormPreviewButton onClick={() => this.removeImage(i)} />
              <FormPreview src={file.preview} />
            </FormPreviewWrapper>
          );
        } else {
          return (
            <FormImageEmpty htmlFor="files" key={i}>
              <FormImageEmptyPlus />
            </FormImageEmpty>
          );
        }
      });

    return (
      <FormContentWrapper>
        <FormBody>
          <img src={DefaultProfileImage} alt="" />
          <FormBodyText
            ref={ref => (this.content = ref)}
            onChange={this.handleContent}
            value={this.state.content}
            height={this.state.textAreaHeight}
            placeholder="대나무숲에 글을 남겨보세요!"
          />
        </FormBody>
        <FormImageWrapper>{FormPreviews}</FormImageWrapper>
        <FormButtonWrapper>
          <div>
            <FormImgLabel htmlFor="files">사진 추가</FormImgLabel>
            <input
              id="files"
              multiple={true}
              type="file"
              style={{ display: 'none' }}
              onChange={this.handleFile}
              accept="image/*"
            />
          </div>
          <FormSubmitButton onClick={this.handleSubmit}>작성</FormSubmitButton>
        </FormButtonWrapper>
      </FormContentWrapper>
    );
  }
}